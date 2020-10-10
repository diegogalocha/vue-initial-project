<template>
	<div class="exception-body accessdenied">
		<div class="exception-panel">
			<div class="exception-code">
				<img src="assets/layout/images/exception/401.svg" alt="serenity-react"/>
			</div>

			<div class="exception-detail">

				<div class="exception-icon">
					<i class="pi pi-lock"></i>
				</div>
				<h1>ACCESS DENIED</h1>
				<p>Please contact the system administrator</p>
				<Button label="GO TO DASHBOARD" @click="goDashboard" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goDashboard(){
				window.location = "/#/"
			}
		}
	}
</script>

<style scoped>

</style>
