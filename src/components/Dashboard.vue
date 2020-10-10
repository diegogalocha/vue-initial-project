<template>
	<div class="p-grid dashboard">
		<div class="p-col-12 p-lg-4">
			<div class="task-box task-box-1">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>Client Meeting</h3>
					<p>Waiting brief from the client</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">WAITING</span>
					<img src="assets/layout/images/avatar1.png" alt="avatar1"/>
					<img src="assets/layout/images/avatar2.png" alt="avatar2"/>
					<img src="assets/layout/images/avatar3.png" alt="avatar3"/>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-lg-4">
			<div class="task-box task-box-2">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>Sale Reports</h3>
					<p>Annual reports per branch</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">IN PROGRESS</span>
					<img src="assets/layout/images/avatar2.png" alt="avatar2"/>
					<img src="assets/layout/images/avatar3.png" alt="avatar3"/>
					<img src="assets/layout/images/avatar4.png" alt="avatar4"/>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-lg-4">
			<div class="task-box task-box-3">
				<div class="task-box-header">
					<i class="pi pi-refresh"></i>
				</div>
				<div class="task-box-content">
					<h3>Marketing Meeting</h3>
					<p>Marketing meeting to review sales.</p>
				</div>
				<div class="task-box-footer">
					<span class="task-status">ON HOLD</span>
					<img src="assets/layout/images/avatar1.png" alt="avatar1"/>
					<img src="assets/layout/images/avatar2.png" alt="avatar2"/>
					<img src="assets/layout/images/avatar3.png" alt="avatar3"/>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-md-3">
			<div class="overview-box overview-box-1">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-envelope"></i></div>
					<div class="overview-box-title">Messages</div>
					<div class="overview-box-count">152</div>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-md-3">
			<div class="overview-box overview-box-2">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-map-marker"></i></div>
					<div class="overview-box-title">Check-Ins</div>
					<div class="overview-box-count">532</div>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-md-3">
			<div class="overview-box overview-box-3">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-file"></i></div>
					<div class="overview-box-title">Files Sycned</div>
					<div class="overview-box-count">28</div>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-md-3">
			<div class="overview-box overview-box-4">
				<div class="overview-box-header"></div>
				<div class="overview-box-content">
					<div class="overview-box-icon"><i class="pi pi-users"></i></div>
					<div class="overview-box-title">Users Online</div>
					<div class="overview-box-count">256</div>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-md-6 p-lg-4 task-list">
			<Panel header="Tasks">
				<Button type="button" icon="pi pi-bars" class="p-button-secondary" @click="toggle"/>
				<Menu ref="menu" :model="menuItems" :popup="true"/>
				<ul class="task-list-container">
					<li>
						<Checkbox name="task" value="reports" v-model="tasksCheckbox"/>
						<span class="task-name">Sales Reports</span>
						<i class="pi pi-briefcase"></i>
					</li>
					<li>
						<Checkbox name="task" value="pay" v-model="tasksCheckbox"/>
						<span class="task-name">Pay Invoices</span>
						<i class="pi pi-file"></i>
					</li>
					<li>
						<Checkbox name="task" value="dinner" v-model="tasksCheckbox"/>
						<span class="task-name">Dinner with Tony</span>
						<i class="pi pi-comments"></i>
					</li>
					<li>
						<Checkbox name="task" value="meeting" v-model="tasksCheckbox"/>
						<span class="task-name">Client Meeting</span>
						<i class="pi pi-users"></i>
					</li>
					<li>
						<Checkbox name="task" value="theme" v-model="tasksCheckbox"/>
						<span class="task-name">New Theme</span>
						<i class="pi pi-palette"></i>
					</li>
					<li>
						<Checkbox name="task" value="ticket" v-model="tasksCheckbox"/>
						<span class="task-name">Flight Ticket</span>
						<i class="pi pi-ticket"></i>
					</li>
				</ul>
			</Panel>
		</div>
		<div class="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
			<Panel header="Contact Us">
				<div class="p-grid">
					<div class="p-col-12">
						<Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City"/>
					</div>
					<div class="p-col-12">
						<InputText type="text" placeholder="Name"/>
					</div>
					<div class="p-col-12">
						<InputText type="text" placeholder="Email"/>
					</div>
					<div class="p-col-12">
						<Button type="button" label="Send" icon="pi pi-check"/>
					</div>
				</div>
			</Panel>
		</div>
		<div class="p-col-12 p-lg-4 messages">
			<Panel header="Messages">
				<ul>
					<li>
						<div>
							<img src="assets/layout/images/avatar1.png" width="45" alt="avatar1"/>
							<div>
								<span class="name">Joshua Williams</span>
								<span class="message">Sales reports attached.</span>
							</div>
							<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
							<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
						</div>
					</li>
					<li>
						<div>
							<img src="assets/layout/images/avatar2.png" width="45" alt="avatar2"/>
							<div>
								<span class="name">Emily Watson</span>
								<span class="message">Meeting at 2pm tomorrow.</span>
							</div>
							<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
							<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
						</div>
					</li>
					<li>
						<div>
							<img src="assets/layout/images/avatar3.png" width="45" alt="avatar3"/>
							<div>
								<span class="name">James White</span>
								<span class="message">Status update required.</span>
							</div>
							<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
							<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
						</div>
					</li>
					<li>
						<div>
							<img src="assets/layout/images/avatar4.png" width="45" alt="avatar4"/>
							<div>
								<span class="name">David Hughes</span>
								<span class="message">Exchange rates estimates.</span>
							</div>
							<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
							<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
						</div>
					</li>
				</ul>
			</Panel>
		</div>
		<div class="p-col-12 p-lg-6 p-grid-nopad">
			<div class="p-col-12 chat">
				<Panel header="Chat">
					<TabView>
						<TabPanel header="Sales Team">
							<ul class="chat-messages">
								<li class="message-from">
									<img src="assets/layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
								</li>
								<li class="message-from">
									<img src="assets/layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
								</li>
								<li class="message-own">
									<span>Sed ut perspiciatis unde omnis iste natus.</span>
								</li>
								<li class="message-from">
									<img src="assets/layout/images/avatar2.png" alt="serenity-layout"/>
									<span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>At vero eos et accusamus.</span>
								</li>
							</ul>
						</TabPanel>
						<TabPanel header="Design Team">
							<ul class="chat-messages">
								<li class="message-from">
									<img src="assets/layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Cliche flannel fam mixtape.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>Tofu glossier bicycle rights banh mi direct trade austin salvia slow-carb occupy.</span>
								</li>
								<li class="message-from">
									<img src="assets/layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Crucifix tote bag pork belly distillery church-key jianbing jean shorts taxidermy.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>Deep v hexagon street art migas butcher, keytar biodiesel bicycle rights typewriter cornhole actually next.</span>
								</li>
								<li class="message-own">
									<span>Oh. You need a little dummy text for your mockup? How quaint.</span>
								</li>
								<li class="message-from">
									<img src="assets/layout/images/avatar3.png" alt="serenity-layout"/>
									<span>Salvia woke bushwick leggings mumblecore poke tumblr master cleanse.</span>
								</li>
								<li class="message-own">
									<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
									<span>Skateboard ethical adaptogen, quinoa wolf poutine echo park.</span>
								</li>
							</ul>
						</TabPanel>
					</TabView>

					<div class="new-message">
						<div class="message-attachment">
							<i class="pi pi-paperclip"></i>
						</div>
						<div class="message-input">
							<input type="text" placeholder="Write a message"/>
						</div>
					</div>
				</Panel>
			</div>
			<div class="p-col-12 status-bars">
				<div class="card">
					<ul>
						<li>
							<div class="status-bar status-bar-1">
								<div class="status-bar-value" style="width:22%">22%</div>
							</div>
							<span>Users</span>
							<i class="pi pi-user"></i>
						</li>
						<li>
							<div class="status-bar status-bar-2">
								<div class="status-bar-value" style="width:78%">78%</div>
							</div>
							<span>Confirmed</span>
							<i class="pi pi-check-circle"></i>
						</li>
						<li>
							<div class="status-bar status-bar-3">
								<div class="status-bar-value" style="width:51%">51%</div>
							</div>
							<span>Defects</span>
							<i class="pi pi-sliders-h"></i>
						</li>
						<li>
							<div class="status-bar status-bar-4">
								<div class="status-bar-value" style="width:68%">68%</div>
							</div>
							<span>Issues</span>
							<i class="pi pi-exclamation-triangle"></i>
						</li>
						<li>
							<div class="status-bar status-bar-5">
								<div class="status-bar-value" style="width:80%">80%</div>
							</div>
							<span>Searches</span>
							<i class="pi pi-search"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="p-col-12 p-lg-6 p-grid-nopad">
			<div class="p-col-12 global-sales">
				<Panel>
					<template #header>
						<span>Global Sales by Region</span>
					</template>
					<table>
						<thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th>Total Sales</th>
							<th>Change</th>
							<th>Status</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1</td>
							<td><img src="assets/layout/images/dashboard/flag-brazil.png" alt="serenity-layout" width="45"/></td>
							<td>BRAZIL</td>
							<td>4234</td>
							<td>35%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td><img src="assets/layout/images/dashboard/flag-china.png" alt="serenity-layout" width="45"/></td>
							<td>CHINA</td>
							<td>3214</td>
							<td>25%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td><img src="assets/layout/images/dashboard/flag-belgium.png" alt="serenity-layout" width="45"/></td>
							<td>BELGIUM</td>
							<td>2842</td>
							<td>28%</td>
							<td><i class="pi pi-arrow-down down-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td><img src="assets/layout/images/dashboard/flag-france.png" alt="serenity-layout" width="45"/></td>
							<td>FRANCE</td>
							<td>1942</td>
							<td>15%</td>
							<td><i class="pi pi-arrow-down down-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td><img src="assets/layout/images/dashboard/flag-uk.png" alt="serenity-layout" width="45"/>
							</td>
							<td>UK</td>
							<td>1956</td>
							<td>25%</td>
							<td><i class="pi pi-arrow-up up-arrow"></i></td>
							<td>
								<Button icon="pi pi-times" title="Reply" class="remove-btn"></Button>
								<Button icon="pi pi-comment" title="Reply" class="message-btn p-button-secondary"></Button>
							</td>
						</tr>
						</tbody>
					</table>
				</Panel>
			</div>
			<div class="p-col-12 image-box">
				<div class="card">
					<img src="assets/layout/images/dashboard/gradient-waters.png" alt="serenity-layout"/>

					<div class="image-box-content">
						<h5>Gradient Waters</h5>
						<span class="image-box-tag">article</span>
						<p>
							Derive inexpedient reason law virtues superiority victorious. Overcome pious horror suicide
							revaluation. Holiest ocean society disgust passion value love.
							Faithful mountains morality hope disgust merciful moral will revaluation society fearful
							love.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
							repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
							culpa ratione quam perferendis esse, cupiditate neque quas!
						</p>
						<p>
							In et blandit turpis, ut congue nibh. Nam vitae tincidunt nunc, sed accumsan lacus. Sed
							efficitur malesuada augue ut varius. Pellentesque ultricies leo massa, eu posuere diam
							sodales quis.
						</p>
						<div class="image-box-footer">
							<Button icon="pi pi-times" title="Close" label="Close" class="remove-btn p-button-warning"
									style="margin-right:4px"></Button>
							<Button icon="pi pi-plus" title="New" label="New" class="message-btn p-button-secondary"></Button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-md-8">
			<div class="card">
				<DataTable :value="products" class="p-datatable-customers" :rows="5" style="margin-bottom: 20px" :paginator="true">
					<Column>
						<template #header>
							Logo
						</template>
						<template #body="slotProps">
							<img :src="'assets/demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50px" />
						</template>
					</Column>
					<Column field="name" header="Name" sortable></Column>
					<Column field="category" header="Category" sortable></Column>
					<Column field="price" header="Price" sortable>
						<template #body="slotProps">
							{{formatCurrency(slotProps.data.price)}}
						</template>
					</Column>
					<Column>
						<template #header>
							View
						</template>
						<template #body>
							<Button icon="pi pi-search" type="button" class="p-button-success p-mr-2 p-mb-1"></Button>
							<Button icon="pi pi-times" type="button" class="p-button-danger p-mb-1"></Button>
						</template>
					</Column>
				</DataTable>

				<Panel header="Sales Graph">
					<Chart type="line" :data="chartData"/>
				</Panel>
			</div>
		</div>
		<div class="p-col-12 p-lg-4">
			<div class="p-col-12">
				<div class="user-card card">
					<div class="user-card-header">
						<img src="assets/layout/images/dashboard/usercard.png" alt="serenity-layout" width="100"/>
					</div>
					<div class="user-card-content">
						<img src="assets/layout/images/avatar.png" alt="serenity-layout"/>
						<Button icon="pi pi-cog" class="p-button-secondary"></Button>

						<div class="user-card-name">
							<span>Wendy Lorina</span>
						</div>

						<div class="user-detail">
							<ul>
								<li class="clearfix">
									<i class="pi pi-list"></i>
									<span class="project-title">Tasks</span>
									<span class="project-detail">3 open</span>
									<div class="project-progressbar">
										<div class="project-progressbar-value" style="width:50%"></div>
									</div>
								</li>
								<li class="clearfix">
									<i class="pi pi-dollar"></i>
									<span class="project-title">Revenue</span>
									<span class="project-detail">+20%</span>
									<div class="project-progressbar">
										<div class="project-progressbar-value" style="width:20%"></div>
									</div>
								</li>
								<li class="clearfix">
									<i class="pi pi-money-bill"></i>
									<span class="project-title">Payments</span>
									<span class="project-detail">24 new</span>
									<div class="project-progressbar">
										<div class="project-progressbar-value" style="width:65%"></div>
									</div>
								</li>
								<li class="clearfix">
									<i class="pi pi-briefcase"></i>
									<span class="project-title">Clients</span>
									<span class="project-detail">+80%</span>
									<div class="project-progressbar">
										<div class="project-progressbar-value" style="width:80%"></div>
									</div>
								</li>
								<li class="clearfix">
									<i class="pi pi-chart-bar"></i>
									<span class="project-title">Turnover</span>
									<span class="project-detail">+40%</span>
									<div class="project-progressbar">
										<div class="project-progressbar-value" style="width:40%"></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="p-col-12 map">
				<Panel header="Map">
					<img src="assets/layout/images/dashboard/map.png" alt="serenity-layout"/>
				</Panel>
			</div>
		</div>
		<div class="p-col-12 schedule">
			<Panel header="Calendar" style="height:100%">
				<FullCalendar :events="fullcalendarEvents" :options="fullcalendarOptions" />
			</Panel>
		</div>
	</div>
</template>

<script>
import ProductService from '../service/ProductService';
import EventService from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
	data() {
		return {
			menuItems: [
				{label: 'Save', icon: 'pi pi-check'},
				{label: 'Update', icon: 'pi pi-refresh'},
				{label: 'Delete', icon: 'pi pi-trash'}
			],
			checked1: true,
			checked2: true,
			checked3: true,
			checked4: true,
			checked5: true,
			checked6: true,
			checked7: false,
			checked8: false,
			checked9: false,
			tasksCheckbox: [],
			selectedCity1: null,
			cities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			products: null,
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: '#4bc0c0'
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						borderColor: '#565656'
					}
				]
			},
			fullcalendarOptions: {
				plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultDate: '2019-01-12',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
			},
			fullcalendarEvents: null
		}
	},
	productService: null,
	eventService: null,
	created() {
		this.productService = new ProductService();
		this.eventService = new EventService();
	},
	mounted() {
		this.productService.getProductsSmall().then(data => this.products = data);
		this.eventService.getEvents().then(data => this.fullcalendarEvents = data);
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		},
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		}
	}
}
</script>

<style lang="scss" scoped>
	@media screen and (max-width: 960px) {
		/deep/ .p-datatable {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid #dee2e6;
					> td {
						text-align: left;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;

						.p-column-title {
							padding: .4rem;
							min-width: 30%;
							display: inline-block;
							margin: -.4rem 1rem -.4rem -.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: .5rem;
						}
					}
				}
			}
		}
	}
</style>
