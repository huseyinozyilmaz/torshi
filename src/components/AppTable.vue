<template>
  <div class="table">
    <h2>{{title}}</h2>
    <input type="text" v-model="search" @keyup.esc="resetSearch" placeholder="Search in table...">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns"
            @click="sortBy(column.key)"
            :class="{ active: sortKey == column.key }">
            <span>{{column.name}}</span><br>
            <span class="icon" :class="{ arrow: sortKey == column.key, asc: sortOrders[column.key] > 0, dsc: sortOrders[column.key] <= 0}"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredRows">
          <slot name="table-row" :row="row">
            <td v-for="column in columns">
              {{row[column.key]}}
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  props: {
    title: String,
    columns: Array,
    rows: Array
  },
  data () {
    var sortOrders = {}
    this.columns.forEach((column) => {
      sortOrders[column.key] = 1
    })
    return {
      search: '',
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredRows () {
      var sortKey = this.sortKey
      var filterKey = this.search && this.search.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.rows
      if (filterKey) {
        data = data.filter((row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    resetSearch () {
      this.search = ''
    },
    sortBy (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },
  filters: {
    capitalise: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style scoped>
  .table {
    margin: 50px 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "title  search "
      "table table";
  }
  .table h2 {
    text-align: left;
    grid-area: title;
  }
  .table input {
    grid-area: search;
    align-self: center;
    justify-self: end;
    display: inline-block;
    width: 250px;
    border:none;
    border-bottom: 2px solid #ddd;
    padding: 8px;
    outline: none;
    font-size: 14px;
  }
  .table input:focus {
    border-bottom: 2px solid #2196F3;
  }
  .table table {
    grid-area: table;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-color: grey;
  }
  thead, tbody {
    vertical-align: middle;
  }
  th:first-child, td:first-child {
    padding-left: 0;
  }
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #E1E1E1;
  }
  th {
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    color: #333;
    border-bottom: 2px solid #E1E1E1;
  }
  th:hover {
    border-bottom: 2px solid #7a7a7a;
  }
  th.active {
    border-bottom: 2px solid #7a7a7a;
  }
  th.active .arrow {
    opacity: 1;
  }
  span.icon {
    display: inline-block;
    vertical-align: middle;
    margin-left: 1px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 1px;
    opacity: 0.66;
  }
  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #7a7a7a;
  }
  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #7a7a7a;
  }
</style>
