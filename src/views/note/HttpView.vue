<script setup lang="ts">
import { ref } from "vue"
const list = ref([
  "200 OK: This status code indicates that the request was successful, and the server has returned the requested resource.",
  "201 Created: This status code is typically returned after a successful POST request, indicating that a new resource has been created on the server.",
  "204 No Content: This status code is often returned for successful requests where the server does not need to return any content in the response body.",
  "204 No Content: This status code is often returned for successful requests where the server does not need to return any content in the response body.",
  "301 Moved Permanently: This status code indicates that the requested resource has been permanently moved to a new location. The client should update its bookmarks or links to the new URL.",
  "302 Found: This status code is similar to 301, but it indicates a temporary redirection. The client should continue to use the original URL for future requests.",
  "304 Not Modified: This status code is returned when the client's cached version of a resource is still valid, and there is no need to transfer the same content again. It is commonly used with conditional GET requests.",
  "400 Bad Request: This status code indicates that the server could not understand the request due to invalid syntax or missing parameters. It is often used for client-side errors.",
  "401 Unauthorized: This status code indicates that the client needs to provide valid credentials to access the requested resource. It is typically used for authentication purposes.",
  "403 Forbidden: This status code indicates that the client is authenticated but does not have sufficient permissions to access the requested resource.",
  "404 Not Found: This status code indicates that the requested resource could not be found on the server.",
  "500 Internal Server Error: This status code indicates that an unexpected error occurred on the server while processing the request. It is often used for server-side errors.",
  "503 Service Unavailable: This status code indicates that the server is temporarily unable to handle the request, usually due to being overloaded or undergoing maintenance."
])
const activeNames = ref(["1"])
</script>

<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="status codes" name="1">
        <p v-for="item in list" :key="item">
          <el-popover placement="right" width="600">
            {{ item }}
            <template #reference>{{ item.split(": ")[0] }} </template>
          </el-popover>
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss"></style>
