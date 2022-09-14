import s from './welcome.module.scss';
import { defineComponent, ref, watchEffect } from 'vue';

import { useRouter } from 'vue-router';
import { useSwipe } from '../../hooks/useSwipe';

export const First = defineComponent({
	setup() {
		const div = ref<HTMLDivElement>();
		const router = useRouter();
		const { direction, swiping } = useSwipe(div, {
			beforeStart: e => e.preventDefault(),
		});
		watchEffect(() => {
			if (swiping.value && direction.value === 'left') {
				router.push('/welcome/2');
			}
		});
		return () => (
			<div class={s.card}>
				<svg>
					<use xlinkHref="#pig"></use>
				</svg>
				<h2>
					会挣钱
					<br />
					还会省钱
				</h2>
			</div>
		);
	},
});

First.displayName = 'First';
