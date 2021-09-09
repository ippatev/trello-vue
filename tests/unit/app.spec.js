import App from "@/App.vue";
import { mount } from "@vue/test-utils";
import TaskList from "@/components/TaskList.vue";
import TaskListItem from "@/components/TaskListItem.vue";

describe("App.vue", () => {
  const wrapper = mount(App);
  it("tasks", () => {
    expect(wrapper.find(".tasks")).toBeTruthy();
  });
  it("task-list component", () => {
    expect(wrapper.findAllComponents(TaskList)).toBeTruthy();
  });
  it("task-list-item components equal 3", () => {
    expect(wrapper.findAllComponents(TaskListItem)).toHaveLength(3);
  });
});
