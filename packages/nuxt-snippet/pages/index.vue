<template>
  <div class="container mx-auto h-full flex items-center flex-col gap-2">
    <p>{{ formattedDate }}</p>
    <p>{{ isStringEmpty }}</p>
    <p>{{ total }}</p>
  </div>
</template>

<script setup lang="ts">
import { formatDate, isEmpty, sum } from "@shared/utils";

const formattedDate = formatDate(new Date());
const isStringEmpty = isEmpty("Hello");
const total = sum(5, 10);
</script>

<style scoped></style>
