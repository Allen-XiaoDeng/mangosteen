import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const increment = () => {
      refCount.value += 1;
    };

    return () => <>
      <div>
        <p>{refCount.value}</p>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      </>
  }
});
