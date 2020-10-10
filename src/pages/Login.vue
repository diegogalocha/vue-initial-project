<template>
	<div class="login-body">
		<div class="login-panel p-fluid">
			<div class="login-panel-header">
				<img src="assets/layout/images/logo-slim.png" alt="serenity-react"/>
			</div>
			<div class="login-panel-content">
				<div class="p-grid">
					<div class="p-col-12">
						<h1>Sign-in to Serenity Network</h1>
					</div>
					<div class="p-col-12">
						<span class="p-float-label">
							<InputText id="username" type="text" v-model="username"/>
							<label for="username">Username</label>
						</span>
					</div>
					<div class="p-col-12">
						<span class="p-float-label">
							<InputText id="password" type="text" v-model="password"/>
							<label for="password">Password</label>
						</span>
					</div>
					<div class="p-col-12">
						<Button label="Sign In" @click="goDashboard" style="width:100%"/>
					</div>
					<div class="p-col-12">
						Don't have an account? <a href="/#">Sign Up</a> now.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			goDashboard(){
				window.location = "/#/"
			}
		}
	}
</script>

<style scoped>

</style>
