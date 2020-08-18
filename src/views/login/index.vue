<template>
  <div>
    <form action="/">
      <van-nav-bar title="登录" class="title" />
      <van-cell-group>
        <van-field v-model="user.mobile" required label="用户名" placeholder="请输入用户名" />
        <van-field v-model="user.code" required label="验证码" placeholder="请输入验证码" type="password" />
      </van-cell-group>
      <van-button type="info" block @click.prevent="toLogin()">登录</van-button>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { setUser } from '@/utils/auth.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async toLogin () {
      try {
        const res = await login(this.user)
        setUser(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
