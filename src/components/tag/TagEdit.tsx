import { defineComponent, PropType } from 'vue';
import s from './TagCreate.module.scss';
export const TagEdit = defineComponent({
	props: {
		name: {
			type: String as PropType<string>,
		},
	},
	setup: (props, context) => {
		return () => <div class={s.wrapper}>create</div>;
	},
});
