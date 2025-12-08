<template>
  <div class="h-[200px] w-[340px] flex items-center p-4">
    <div class="w-full h-full bg-[#EEF1F7] rounded-md shadow-sm">
      <div class="p-4 flex">
        <img src="/img/user.png" class="w-12 h-12" />
        <div class="pl-2 text-[#213866] font-semibold">
          <p>{{ name }}</p>
          <div class="flex gap-[2px] pt-1">
            <img src="/img/filled-star-icon.png" class="w-[15px] h-[15px]" />
            <img src="/img/filled-star-icon.png" class="w-[15px] h-[15px]" />
            <img src="/img/filled-star-icon.png" class="w-[15px] h-[15px]" />
            <img src="/img/filled-star-icon.png" class="w-[15px] h-[15px]" />
            <img src="/img/star-icon.png" class="w-[15px] h-[15px]" />
          </div>
        </div>
      </div>
      <div class="max-w-[280px] pb-4 text-[13px] mx-4 text-gray-700">
        "{{ comment }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    comment: String
  }
}
</script>
