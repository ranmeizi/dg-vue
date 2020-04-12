import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  }
})
class index extends Vue {
  filterText = ''
  data = [{
    id: 1,
    label: '一级 1',
    children: [{
      id: 4,
      label: '二级 1-1',
      children: [{
        id: 9,
        label: '三级 1-1-1'
      }, {
        id: 10,
        label: '三级 1-1-2'
      }]
    }]
  }, {
    id: 2,
    label: '一级 2',
    children: [{
      id: 5,
      label: '二级 2-1'
    }, {
      id: 6,
      label: '二级 2-2'
    }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
  }]

  filterNode(value, data) {
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
  }
  render(h) {
    return <div>
      {/* 筛选，按钮 */}
      <el-row type='flex' justify='space-between'>
        <el-col span={6}>
          <el-input
            placeholder="输入关键字进行过滤"
            v-model={this.filterText}>
          </el-input>
        </el-col>
        <el-col span={2}>
          <el-button type="success" onClick={() => { this.open() }}>新增用户</el-button>
        </el-col>
      </el-row>
      <el-tree
        class="filter-tree"
        data={this.data}
        default-expand-all
        filter-node-method={this.filterNode}
        ref="tree">
      </el-tree>
    </div>
  }
}

export default index
