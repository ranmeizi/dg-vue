import Vue from 'vue'
import Component from 'vue-class-component'
import Login from './components/Login'

@Component
class index extends Vue {
  render(h) {
    return <div class='login-page'>
      <div class='login-card'>
        <Login />
      </div>
    </div>
  }
}

export default index
