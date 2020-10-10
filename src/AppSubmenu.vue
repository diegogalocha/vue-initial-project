<template>
	<ul v-if="items" role="menu">
        <template v-for="(item,i) of items">
		<li v-if="visible(item) && !item.separator" :key="item.label || i" :class="[{'active-menuitem': activeIndex === i && !item.to && !item.disabled}]" role="none">
            <router-link v-if="item.to" :to="item.to" :style="item.style" :class="[item.class, 'p-ripple', {'p-disabled': item.disabled}]" :target="item.target" exact
                         @click.native="onMenuItemClick($event,item,i)" @mouseenter.native="onMenuItemMouseEnter(i)" role="menuitem" v-ripple>
                <i :class="item.icon"></i>
                <span class="menuitem-text">{{item.label}}</span>
                <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                <span v-if="item.badge" class="menuitem-badge">{{item.badge}}</span>
            </router-link>
            <a v-if="!item.to" :href="item.url||'#'"  :style="item.style" :class="[item.class, 'p-ripple', {'p-disabled': item.disabled}]" :target="item.target"
               @click="onMenuItemClick($event,item,i)" @mouseenter="onMenuItemMouseEnter(i)" role="menuitem" v-ripple>
                <i :class="item.icon"></i>
                <span class="menuitem-text">{{item.label}}</span>
                <i v-if="item.items" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                <span v-if="item.badge" class="menuitem-badge">{{item.badge}}</span>
            </a>
            <transition name="layout-submenu-container">
                    <AppSubmenu v-show="activeIndex === i" :items="visible(item) && item.items" :layoutMode="layoutMode" :parentMenuItemActive="activeIndex === i"
                                @menuitem-click="$emit('menuitem-click', $event)" :menuActive="menuActive"></AppSubmenu>
            </transition>
        </li>
            <li class="p-menu-separator" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i" role="separator"></li>
        </template>
	</ul>
</template>
<script>
import EventBus from './event-bus';

export default {
	name: 'AppSubmenu',
	props: {
		items: Array,
		layoutMode: String,
		menuActive: Boolean,
		root: {
			type: Boolean,
			default: false
		},
		parentMenuItemActive: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			activeIndex : null
		}
	},
	mounted() {
		EventBus.$on('reset_active_index', () => {
			if(this.layoutMode === 'horizontal') {
				this.activeIndex = null;
			}
		});
	},
	methods: {
		onMenuItemClick(event, item, index) {
			if (item.disabled) {
				event.preventDefault();
				return;
			}

			//execute command
			if (item.command) {
                item.command({originalEvent: event, item: item});
                event.preventDefault();
			}

            if (item.items) {
                event.preventDefault();
            }

			if (this.root) {
				this.$emit('root-menuitem-click', {
					originalEvent: event,
					isSameIndex: index === this.activeIndex
				});
			}


            if (item.items) {
                this.activeIndex = index === this.activeIndex ? null : index;
            }

			this.$emit('menuitem-click', {
				originalEvent: event,
				item: item
			});
		},
        isMobile() {
            return window.innerWidth <= 1024;
        },
		onMenuItemMouseEnter(index) {
			if(this.root && this.menuActive && this.layoutMode === 'horizontal' && !this.isMobile()) {
				this.activeIndex =  index;
			}
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        }
	},
	components: {
		"AppSubmenu": this
	}
}
</script>

<style scoped>

</style>
