import Vue from 'vue'
import Component from 'vue-class-component'
let id = 1000;
@Component({
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  }
})
class index extends Vue {
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
  }];
  filterText = ''
  append(data) {
    const newChild = { id: id++, label: 'testtest', children: [] };
    if (!data.children) {
      this.$set(data, 'children', []);
    }
    data.children.push(newChild);
  }

  remove(node, data) {
    const parent = node.parent;
    const children = parent.data.children || parent.data;
    const index = children.findIndex(d => d.id === data.id);
    children.splice(index, 1);
  }
  filterNode(value, data) {
    console.log(1)
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
  }
  renderContent(h, { node, data }) {
    return (
      <span class="custom-tree-node">
        <span>{node.label}</span>
        <span>
          <el-button size="mini" type="text" onClick={() => this.append(data)}>Append</el-button>
          <el-button size="mini" type="text" onClick={() => this.remove(node, data)}>Delete</el-button>
        </span>
      </span>);
  }
  render(h) {
    return <div>
      {/* 筛选，新增 */}
      <div>
        <el-input
          placeholder="输入关键字进行过滤"
          v-model={this.filterText}>
        </el-input>
        <el-button>添加角色</el-button>
      </div>
      <el-tree
        data={this.data}
        class="filter-tree"
        // node-key="id"
        props={{
          children: 'children',
          label: 'label'
        }}
        ref="tree"
        default-expand-all
        filter-node-method={this.filterNode}
        expand-on-click-node={false}
        render-content={this.renderContent}>
      </el-tree>
    </div>
  }
}

export default index
