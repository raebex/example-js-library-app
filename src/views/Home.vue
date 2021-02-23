<template>
  <div class="home">
    <highlightjs
      id="codeSnippet"
      language="javascript"
      code="
      setTimeout(function() {
        console.log('First task done!');
        setTimeout(function() {
          console.log('Second task done!');
          setTimeout(function() {
            console.log('Third task done!');
          }, 2000);
        }, 2000);
      }, 2000);
      "
    />

    <button id="btn" data-clipboard-target="#codeSnippet">Copy to clipboard</button>

    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
#codeSnippet {
  text-align: left;
}
</style>

<script>
import ClipboardJS from "clipboard";

export default {
  data: function() {
    return {
      message: "",
    };
  },
  mounted: function() {
    var clipboard = new ClipboardJS("#btn");
    var self = this;

    clipboard.on("success", function(e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      self.message = "Successfully copied!";

      e.clearSelection();
    });

    clipboard.on("error", function(e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  },
  methods: {},
};
</script>
