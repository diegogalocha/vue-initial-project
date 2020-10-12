<template>
	<div class="layout-breadcrumb">
		<ul>
			<li><button class="p-link" @click="home"><i class="pi pi-home"></i></button></li>
			<li>{{$route.path}}</li>
		</ul>

		<div class="layout-breadcrumb-options">
			<InputSwitch v-model="d_darkMenu" @change="changeMenuColor($event, d_darkMenu)" />
			<button class="p-link" title="Logout">
				<i class="pi pi-power-off"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			darkMenu: {
				type: Boolean,
				default: null
			}
		},
		data() {
			return {
				d_darkMenu: this.darkMenu
			}
		},
		watch: {
			darkMenu(newValue) {
				this.d_darkMenu = newValue;
			}
		},
		methods: {
			home() {
				window.location = "/#/"
			},
			changeMenuColor(event, menuColor) {
				this.$emit('menu-color-change', menuColor);
				event.preventDefault();
			}
		}
	}
</script>

<style scoped>

</style>
