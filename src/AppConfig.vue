<template>
	<div id="layout-config" :class="containerClass">
		<a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
			<i class="pi pi-cog"></i>
		</a>
		<a href="#" class="layout-config-close" @click="hideConfigurator">
			<i class="pi pi-times"></i>
		</a>
		<div class="layout-config-content">

			<h5 style="margin-top: 0">Input Style</h5>
			<div class="p-formgroup-inline">
				<div class="p-field-radiobutton">
					<RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @input="onChange"/>
					<label for="input_outlined">Outlined</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @input="onChange"/>
					<label for="input_filled">Filled</label>
				</div>
			</div>

			<h5 style="margin-top: .5em">Ripple Effect</h5>
			<InputSwitch :value="rippleActive" @input="onRippleChange"/>

			<h5>Menu Type</h5>
			<div class="p-formgroup-inline">
				<div class="p-field-radiobutton">
					<RadioButton id="overlay" name="layoutMode" value="overlay" v-model="d_layoutMode" @change="changeLayout($event, 'overlay')"/>
					<label for="overlay">Vertical</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="horizontal" name="layoutMode" value="horizontal" v-model="d_layoutMode" @change="changeLayout($event, 'horizontal')"/>
					<label for="horizontal">Horizontal</label>
				</div>
			</div>

			<h5 style="margin-top: .5em">Flat Layouts</h5>
			<div class="layout-themes">
				<div v-for="l of layoutColors" :key="l.name">
					<a href="#" @click="changeLayoutColor($event, l.file)" class="flat-layouts" :style="{backgroundColor:l.color}">
						<i class="pi pi-check" v-if="layoutColor === l.file"></i>
					</a>
				</div>
			</div>

			<h5>Special Layouts</h5>
			<div class="layout-themes">
				<div v-for="l of layoutSpecialColors" :key="l.name">
					<a href="#" @click="changeLayoutColor($event, l.file)">
						<img :src="'assets/layout/images/configurator/layout/special/' + l.image" :alt="l.name">
						<i class="pi pi-check" v-if="layoutColor === l.file"></i>
					</a>
				</div>
			</div>

			<h5>Themes</h5>
			<div class="layout-themes">
				<div v-for="t of themes" :key="t.name">
					<a href="#" @click="changeTheme($event, t.file)">
						<img :src="'assets/layout/images/configurator/theme/' + t.image" :alt="t.name">
						<i class="pi pi-check" v-if="theme === t.file"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			layoutMode: {
				type: String,
				default: null
			},
			layoutColor: {
				type: String,
				default: null
			},
			layoutColors: {
				type: Array,
				default: null
			},
			layoutSpecialColors: {
				type: Array,
				default: null
			},
			theme: {
				type: String,
				default: null
			},
			themes: {
				type: Array,
				default: null
			}
		},
		data() {
			return {
				active: false,
				d_layoutMode: this.layoutMode,
			}
		},
		watch: {
			$route() {
				if (this.active) {
					this.active = false;
					this.unbindOutsideClickListener();
				}
			},
			layoutMode(newValue) {
				this.d_layoutMode = newValue;
			}
		},
		outsideClickListener: null,
		methods: {
			onChange(value) {
				this.$appState.inputStyle = value;
			},
			onRippleChange(value) {
				this.$primevue.ripple = value;
			},
			toggleConfigurator(event) {
				this.active = !this.active;
				event.preventDefault();

				if (this.active)
					this.bindOutsideClickListener();
				else
					this.unbindOutsideClickListener();
			},
			hideConfigurator(event) {
				this.active = false;
				this.unbindOutsideClickListener();
				event.preventDefault();
			},
			changeLayout(event, layoutMode) {
				this.$emit('layout-change', layoutMode);
				event.preventDefault();
			},
			changeMenuColor(event, menuColor) {
				this.$emit('menu-color-change', menuColor);
				event.preventDefault();
			},
			changeLayoutColor(event, topbarColor, logo) {
				this.$emit('layout-color-change', topbarColor, logo);
				event.preventDefault();
			},
			changeTheme(event, theme) {
				this.$emit('theme-change', theme);
				event.preventDefault();
			},
			bindOutsideClickListener() {
				if (!this.outsideClickListener) {
					this.outsideClickListener = (event) => {
						if (this.active && this.isOutsideClicked(event)) {
							this.active = false;
						}
					};
					document.addEventListener('click', this.outsideClickListener);
				}
			},
			unbindOutsideClickListener() {
				if (this.outsideClickListener) {
					document.removeEventListener('click', this.outsideClickListener);
					this.outsideClickListener = null;
				}
			},
			isOutsideClicked(event) {
				return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
			}
		},
		computed: {
			containerClass() {
				return ['layout-config', {'layout-config-active': this.active}];
			},
			rippleActive() {
				return this.$primevue.ripple;
			},
			value() {
				return this.$appState.inputStyle;
			}
		}
	}
</script>
