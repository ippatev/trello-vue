import App from "@/App.vue";
import { mount } from "@vue/test-utils";
import TaskList from "@/components/TaskList.vue";
import TaskListItem from "@/components/TaskListItem.vue";

describe("App.vue", () => {
  it("title", () => {
    const wrapper = mount(App);
    expect(wrapper.find(".tasks")).toBeTruthy();
    expect(wrapper.findAllComponents(TaskList)).toBeTruthy();
    expect(wrapper.findAllComponents(TaskListItem)).toHaveLength(3);
  });
});
