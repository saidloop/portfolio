import contextCursor from "../libs/context-cursor/index.ts";

var mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  contextCursor({
    radius: 25,
  });
}
