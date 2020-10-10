<template>
	<div :class="containerClass" @click="onWrapperClick">
		<div ref="sidebar" :class="sidebarClass" @click="onSidebarClick" @mouseenter="onSidebarMouseEnter" @mouseleave="onSidebarMouseLeave">
			<div class="sidebar-logo">
				<button class="p-link">
					<img alt="logo" src="assets/layout/images/logo-slim.png" />
					<span class="app-name">SERENITY</span>
				</button>
				<button class="p-link sidebar-anchor" title="Toggle Menu" @click="onToggleMenuClick"> </button>
			</div>

			<div class="layout-menu-container">
				<AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>
			</div>
		</div>

		<div class="layout-main">
			<AppTopBar :layoutMode="layoutMode" :activeTopbarItem="activeTopbarItem" :topbarMenuActive="topbarMenuActive" @menu-button-click="onMenuButtonClick"
						@topbar-item-click="onTopbarItemClick" @topbar-mobile-menu-button-click="onTopbarMobileMenuButtonClick"/>

			<AppBreadcrumb></AppBreadcrumb>

			<div class="layout-content">
				<router-view />
			</div>

			<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" :darkMenu="darkMenu" @menu-color-change="onMenuColorChange"
						:layoutColor="layoutColor" :layoutSpecialColors="layoutSpecialColors" :layoutColors="layoutColors" @layout-color-change="changeLayout"
						:theme="theme" :themes="themeColors" @theme-change="changeTheme"></AppConfig>

			<AppFooter />

			<div class="layout-main-mask" v-if="mobileMenuActive"></div>
		</div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppMenu from './AppMenu.vue';
import AppConfig from './AppConfig.vue';
import AppFooter from './AppFooter.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import DomHandler from 'primevue/components/utils/DomHandler'
import EventBus from './event-bus';

export default {
    data() {
        return {
			activeTopbarItem: null,
			layoutMode: 'overlay',
			mobileMenuActive: null,
			topbarMenuActive: null,
			currentRoute: null,
			menuActive: false,
			darkMenu: false,
            menu : [
				{label: 'Dashboard', icon: 'pi pi-fw pi-home', to:'/'},
				{
					label: 'UI Kit', icon: 'pi pi-fw pi-sitemap', badge: 6,
					items: [
						{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
						{label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
						{label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
						{label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
						{label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
						{label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
						{label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
						{label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
						{label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menus'},
						{label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
						{label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
						{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
						{label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
					]
				},
				{
					label: "Utilities", icon:'pi pi-fw pi-globe',
					items: [
						{label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},
						{label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},
						{label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},
						{label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},
						{label: 'Widgets', icon:'pi pi-fw pi-star-o', to:'/widgets'},
						{label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},
						{label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},
						{label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},
						{label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},
					]
				},
				{
					label: 'Pages', icon: 'pi pi-fw pi-clone', badge: 8, badgeStyleClass: 'teal-badge',
					items: [
						{label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud'},
						{label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},
						{label: 'Landing', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank'},
						{label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
						{label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice'},
						{label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help'},
						{label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
						{label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
						{label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
						{label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
					]
				},
				{
					label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',
					items: [
						{
							label: 'Submenu 1', icon: 'pi pi-fw pi-circle-off',
							items: [
								{
									label: 'Submenu 1.1', icon: 'pi pi-fw pi-circle-off',
									items: [
										{label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-circle-off'},
									]
								},
								{
									label: 'Submenu 1.2', icon: 'pi pi-fw pi-circle-off',
									items: [
										{label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-circle-off'}
									]
								},
							]
						},
						{
							label: 'Submenu 2', icon: 'pi pi-fw pi-circle-off',
							items: [
								{
									label: 'Submenu 2.1', icon: 'pi pi-fw pi-circle-off',
									items: [
										{label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-circle-off'},
									]
								},
								{
									label: 'Submenu 2.2', icon: 'pi pi-fw pi-circle-off',
									items: [
										{label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-circle-off'},
										{label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-circle-off'}
									]
								},
							]
						}
					]
				},
				{label: 'Documentation', icon: 'pi pi-fw pi-question', to: '/documentation'},
				{label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store"}},
            ],
			layoutColor: 'moody',
			layoutColors: [
				{name:'Amber Pink', file:'amber', color:'#FFB300'},
				{name:'Blue Amber', file:'blue', color:'#1E88E5'},
				{name:'Blue Grey Green', file:'bluegrey', color:'#607D8B'},
				{name:'Brown Cyan', file:'brown', color:'#795548'},
				{name:'Cyan Amber', file:'cyan', color:'#00BCD4'},
				{name:'Deep Orange Cyan', file:'deeporange', color:'#F4511E'},
				{name:'Deep Purple Orange', file:'deeppurple', color:'#5E35B1'},
				{name:'Green Brown', file:'green', color:'#43A047'},
				{name:'Grey Indigo', file:'grey', color:'#757575'},
				{name:'Indigo Pink', file:'indigo', color:'#3f51b5'},
				{name:'Light Blue Blue Grey', file:'lightblue', color:'#03A9F4'},
				{name:'Light Green Purple', file:'lightgreen', color:'#7CB342'},
				{name:'Lime Blue Grey', file:'lime', color:'#C0CA33'},
				{name:'Orange Indigo', file:'orange', color:'#FB8C00'},
				{name:'Pink Amber', file:'pink', color:'#D81B60'},
				{name:'Purple Pink', file:'purple', color:'#8E24AA'},
				{name:'Teal Red', file:'teal', color:'#009688'},
				{name:'Yellow Teal', file:'yellow', color:'#FBC02D'},
			],
			layoutSpecialColors: [
				{name:'Reflection', file:'reflection', image:'reflection.png'},
				{name:'Moody', file:'moody', image:'moody.png'},
				{name:'Cityscape', file:'cityscape', image:'cityscape.png'},
				{name:'Cloudy', file:'cloudy', image:'cloudy.png'},
				{name:'Storm', file:'storm', image:'storm.png'},
				{name:'Palm', file:'palm', image:'palm.png'},
				{name:'Flatiron', file:'flatiron', image:'flatiron.png'},
				{name:'Panaroma', file:'panaroma', image:'panaroma.png'},
				{name:'Horizon', file:'horizon', image:'horizon.png'},
			],
			theme: 'bluegrey',
			themeColors: [
				{ name: 'Blue Amber', file: 'blue', image: 'blue-amber.svg' },
				{ name: 'Blue Grey Green', file: 'bluegrey', image: 'bluegrey-green.svg' },
				{ name: 'Brown Cyan', file: 'brown', image: 'brown-cyan.svg' },
				{ name: 'Cyan Amer', file: 'cyan', image: 'cyan-amber.svg' },
				{ name: 'Deep Orange Cyan', file: 'deeporange', image: 'deeporange-cyan.svg' },
				{ name: 'Deep Purple Orange', file: 'deeppurple', image: 'deeppurple-orange.svg' },
				{ name: 'Green Brown', file: 'green', image: 'green-brown.svg' },
				{ name: 'Grey Indigo', file: 'grey', image: 'grey-indigo.svg' },
				{ name: 'Indigo Pink', file: 'indigo', image: 'indigo-pink.svg' },
				{ name: 'Light Blue Blue Grey', file: 'lightblue', image: 'lightblue-bluegrey.svg' },
				{ name: 'Light Green Purple', file: 'lightgreen', image: 'lightgreen-purple.svg' },
				{ name: 'Lime Blue Grey', file: 'lime', image: 'lime-bluegrey.svg' },
				{ name: 'Orange Indigo', file: 'orange', image: 'orange-indigo.svg' },
				{ name: 'Pink Amber', file: 'pink', image: 'pink-amber.svg' },
				{ name: 'Purple Pink', file: 'purple', image: 'purple-pink.svg' },
				{ name: 'Teal Red', file: 'teal', image: 'teal-red.svg' },
				{ name: 'Yellow Teal', file: 'yellow', image: 'yellow-teal.svg' }
			]
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
        onWrapperClick() {
			if (!this.menuClick && !this.menuButtonClick && this.mobileMenuActive) {
				this.mobileMenuActive = false;
			}

			if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
				this.activeTopbarItem =  null;
				this.topbarMenuActive = false;
			}

			if(!this.menuClick) {
				if(this.isHorizontal() || this.isOverlay()) {
					this.menuActive = false;
					EventBus.$emit('reset_active_index');
				}
			}

			this.menuClick = false;
			this.menuButtonClick = false;
			this.topbarMenuClick = false;
			this.topbarMenuButtonClick = false;
        },
		onMenuButtonClick(event) {
			this.menuButtonClick = true;

			if (this.isMobile()) {
				this.mobileMenuActive = !this.mobileMenuActive;
			}

			event.preventDefault();
		},
		onTopbarItemClick(event) {
			this.topbarMenuClick = true;
			if (this.activeTopbarItem === event.item)
				this.activeTopbarItem = null;
			else
				this.activeTopbarItem = event.item;

			event.originalEvent.preventDefault();
		},
		onTopbarMobileMenuButtonClick(event) {
			this.topbarMenuButtonClick = true;
			this.topbarMenuActive = !this.topbarMenuActive;
			event.preventDefault();
		},
		onSidebarClick() {
			this.menuClick = true;
		},
		onSidebarMouseEnter() {
			if (this.sidebarTimeout) {
				clearTimeout(this.sidebarTimeout);
			}
			DomHandler.addClass(this.$refs.sidebar, 'layout-sidebar-active');
		},
		onSidebarMouseLeave() {
			this.sidebarTimeout = setTimeout(() => {
				DomHandler.removeClass(this.$refs.sidebar, 'layout-sidebar-active');
			}, 250);
		},
		onToggleMenuClick() {
			this.layoutMode = (this.layoutMode !== 'static') ? 'static' : 'overlay';
		},
		isOverlay() {
			return this.layoutMode === 'overlay';
		},
		isHorizontal() {
			return this.layoutMode === 'horizontal';
		},
		onRootMenuItemClick() {
			this.menuActive = !this.menuActive;
		},
		onMenuItemClick(event) {
			if(!event.item.items) {
				EventBus.$emit('reset_active_index');
			}
			if(!event.item.items && this.isHorizontal()) {
				this.menuActive = false;
			}
		},
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
		},
		onMenuColorChange(menuColor) {
			this.darkMenu = menuColor;
		},
		changeTheme(theme) {
			this.theme = theme;
			this.changeStyleSheetUrl('theme-css', theme, 'theme');
		},
		changeLayout(layout) {
			this.layoutColor = layout
			this.changeStyleSheetUrl('layout-css', layout, 'layout');
		},
		changeStyleSheetUrl(id, value, prefix) {
			let element = document.getElementById(id);
			let urlTokens = element.getAttribute('href').split('/');
			urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
			let newURL = urlTokens.join('/');

			this.replaceLink(element, newURL);
		},
		replaceLink(linkElement, href) {
			const id = linkElement.getAttribute('id');
			const cloneLinkElement = linkElement.cloneNode(true);

			cloneLinkElement.setAttribute('href', href);
			cloneLinkElement.setAttribute('id', id + '-clone');

			linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

			cloneLinkElement.addEventListener('load', () => {
				linkElement.remove();
				cloneLinkElement.setAttribute('id', id);
			});
		},
		isMobile() {
			return window.innerWidth <= 1024;
		}
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
				'layout-wrapper-static': this.layoutMode === 'static',
				'layout-menu-horizontal': this.layoutMode === 'horizontal',
				'layout-wrapper-active': this.mobileMenuActive,
				'p-input-filled': this.$appState.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.ripple === false
			}];
        },
		sidebarClass() {
			return ['layout-sidebar', {'layout-sidebar-dark': this.darkMenu,}];
		}
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppMenu': AppMenu,
        'AppConfig': AppConfig,
        'AppFooter': AppFooter,
        'AppBreadcrumb': AppBreadcrumb
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
