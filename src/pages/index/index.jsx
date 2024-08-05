import React from 'react'
import { View } from '@tarojs/components'
import { Button, Form, Uploader } from "@nutui/nutui-react-taro"
import './index.less'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>

      <Form>
        <Form.Item name="file">
          <Uploader accept=".jpeg,.jpg"></Uploader>
        </Form.Item>
      </Form>
    </View>
  )
}

export default Index
