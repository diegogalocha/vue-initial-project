<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card docs">
                <h4>Current Version</h4>
                <p>Vue 2.6.0 and PrimeVue 2.0.x</p>

                <h4>Getting Started</h4>
                <p>Serenity is an application template for Vue based on the <a href="https://cli.vuejs.org/">Vue CLI</a> that provides out-of-the-box standard
                tooling for Vue projects. If you don't have CLI installed already run the following command.</p>
<CodeHighlight>
npm install -g @vue/cli

# OR

yarn global add @vue/cli
</CodeHighlight>

                <p>Once CLI is ready in your system, extract the contents of the Serenity zip file distribution, cd to the directory and install the libraries from npm.</p>

<CodeHighlight>
npm install

# OR

yarn
</CodeHighlight>

                <p>Final step is running the application using the serve script and navigate to <b>http://localhost:8080/</b> to view the application.
                    That is it, you may now start with the development of your application using the Serenity template.</p>

<CodeHighlight>
npm run serve
</CodeHighlight>

                <h4>Vue CLI Scripts</h4>
                <p>Following commands are derived from create-app-app.</p>
<CodeHighlight>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.
</CodeHighlight>

                <h4>Structure</h4>
                <p>Serenity consists of 2 main parts; the application layout and the resources. <i>App.vue</i> inside src folder is the main component containing the template for the base layout
                    whereas required resources such as SASS structure for the layout are placed inside the <b>src/assets/layout</b> folder.</p>

                <h4>Template</h4>
                <p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components such as topbar, content, menu and footer. Here is template of the
                    <i>App.vue</i> component that implements the logic such as menu state, layout modes and other configurable options.
                </p>

<CodeHighlight>
<template v-pre>
&lt;template&gt;
    &lt;div :class="containerClass" @click="onWrapperClick"&gt;
        &lt;div ref="sidebar" :class="sidebarClass" @click="onSidebarClick" @mouseenter="onSidebarMouseEnter" @mouseleave="onSidebarMouseLeave"&gt;
            &lt;div class="sidebar-logo"&gt;
                &lt;button class="p-link"&gt;
                    &lt;img alt="logo" src="assets/layout/images/logo-slim.png" /&gt;
                    &lt;span class="app-name"&gt;SERENITY&lt;/span&gt;
                &lt;/button&gt;
                &lt;button class="p-link sidebar-anchor" title="Toggle Menu" @click="onToggleMenuClick"&gt; &lt;/button&gt;
            &lt;/div&gt;

            &lt;div class="layout-menu-container"&gt;
                &lt;AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"&gt;&lt;/AppMenu&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="layout-main"&gt;
            &lt;AppTopBar :layoutMode="layoutMode" :activeTopbarItem="activeTopbarItem" :topbarMenuActive="topbarMenuActive" @menu-button-click="onMenuButtonClick"
                       @topbar-item-click="onTopbarItemClick" @topbar-mobile-menu-button-click="onTopbarMobileMenuButtonClick"/&gt;

            &lt;AppBreadcrumb&gt;&lt;/AppBreadcrumb&gt;

            &lt;div class="layout-content"&gt;
                &lt;router-view /&gt;
            &lt;/div&gt;

            &lt;AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" :darkMenu="darkMenu" @menu-color-change="onMenuColorChange"
                       :layoutColor="layoutColor" :layoutSpecialColors="layoutSpecialColors" :layoutColors="layoutColors" @layout-color-change="changeLayout"
                       :theme="theme" :themes="themeColors" @theme-change="changeTheme"&gt;&lt;/AppConfig&gt;

            &lt;AppFooter /&gt;

            &lt;div class="layout-main-mask" v-if="mobileMenuActive"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

                <h4>Menu</h4>
                <p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeNG MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.vue</i> file and define your own model as a nested structure using the menu property.
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<CodeHighlight lang="js">
data() &#123;
    return &#123;
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
            {label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store"}}
        ]
    &#125;
&#125;
</CodeHighlight>
</div>

                <p>Dependencies of Serenity are listed below and needs to be added to package.json. Serenity has no direct dependency, even PrimeVue components
                    are an optional dependency.</p>

<CodeHighlight>
{
    "primevue": "^2.0.0",               //optional: PrimeVue components
    "primeicons": "4.0.0",              //optional: Icons
    "primeflex": "1.0.0",               //optional: Grid system
}
</CodeHighlight>

                <h4>Theme</h4>
                <p>Serenity provides 18 PrimeVue themes out of the box, setup of a theme simple including the css of theme to your page that are located inside public/assets/sass/theme folder.</p>
                <p>In the demo application, theme css file is added to the index page to enable themeswitcher functionality however since VueCLI supports
                    SASS compilation via webpack, you may also import the sass of the theme to App.vue as well.</p>
                <ul>
                    <li>theme-amber</li>
                    <li>theme-blue</li>
                    <li>theme-bluegrey</li>
                    <li>theme-brown</li>
                    <li>theme-cyan</li>
                    <li>theme-deeporange</li>
                    <li>theme-deeppurple</li>
                    <li>theme-green</li>
                    <li>theme-grey</li>
                    <li>theme-indigo</li>
                    <li>theme-lightblue</li>
                    <li>theme-lightgreen</li>
                    <li>theme-lime</li>
                    <li>theme-orange</li>
                    <li>theme-pink</li>
                    <li>theme-purple</li>
                    <li>theme-teal</li>
                    <li>theme-yellow</li>
                </ul>

                <p>A custom theme can be developed by the following steps.</p>
                <ul>
                    <li>Choose a custom theme name such as theme-myown.</li>
                    <li>Create a file named theme-myown.scss under <i>public/assets/sass/theme folder</i>.</li>
                    <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>
                    <li>Build the scss to generate css.</li>
                    <li>Include the theme file to your application.</li>
                </ul>

                <p>Here are the variables required to create a theme which are the primary and accent colors along with their shades.</p>

<CodeHighlight lang="css">
$primaryColor:#607D8B;
$primaryTextColor:#ffffff;
$accentColor:#7CB342;
$accentTextColor: #ffffff;

@import '../sass/theme/_theme';
</CodeHighlight>

                <p>If you prefer to compile manually, an example sass command to compile the css would be;</p>

<CodeHighlight>
sass src/assets/theme-myown/theme.scss:src/assets/theme-myown/theme.css
</CodeHighlight>

                <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<CodeHighlight>
sass --watch public/assets:public/assets
</CodeHighlight>

                <p>Same can also be applied to layout itself;</p>
                <ul>
                    <li>Choose a layout name such as layout-myown.</li>
                    <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
                    <li>Define the variables listed below and import the <i>../sass/layout/_layout.scss</i> file.</li>
                    <li>Build the scss to generate css</li>
                    <li>Serve the css by importing it using a link tag or a bundler.</li>
                </ul>

                <p>Here are the variables required to create a layout, you may need to change the last line according to the
                    relative path of the sass folder in your application.</p>
<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<CodeHighlight lang="css">
/* Sidebar */
$sidebarLogoBgColor:rgba(36,50,59,0.5);
$sidebarBgColor:#566e87;
$darkSidebarBgColor:#202d35;
$menuBgImageLight:'bg-moody-light.png';
$menuBgImageDark:'bg-moody-dark.png';
$horizontalMenuBgImageLight:'bg-moody-light-horizontal.png';
$horizontalMenuBgImageDark:'bg-moody-dark-horizontal.png';
$horizontalMenuBgColor:#080A10;
$horizontalDarkMenuBgColor:#0A1118;

/* Primary */
$primaryColor:#607D8B;
$primaryDarkColor:#496475;
$primaryLightColor:#90A4AE;
$primaryLightestColor:#E8EAF6;
$primaryTextColor:#ffffff;

/* Accent */
$accentColor:#7CB342;
$accentLightColor:#9CCC65;
$accentTextColor:#ffffff;

/* Topbar */
$topbarTextColor:#E8EAF6;
$topbarIconColor:#E8EAF6;

/* Submenu */
$submenuBgColor:rgba(255,255,255,0.2);
$darkSubmenuBgColor:rgba(255,255,255,0.15);
$horizontalSubmenuBgColor:#2b3d4c;
$horizontalDarkSubmenuBgColor:#0e161e;
$horizontalSubmenuitemHoverBgColor: rgba(255, 255, 255, 0.4);
$horizontalSubmenuitemDarkHoverBgColor: rgba(255, 255, 255, 0.4);
$horizontalSubmenuitemDarkHoverTextColor:#ffffff;
$horizontalMenuActiveTextColor:#ffffff;
$horizontalMenuActiveHoverTextColor:#ffffff;
$horizontalDarkMenuActiveTextColor:#ffffff;
$horizontalDarkMenuActiveHoverTextColor:#ffffff;

/* Default MenuItem */
$menuitemTextColor:#ffffff;
$menuitemIconTextColor:#ffffff;

/* Hover MenuItem */
$menuitemHoverBgColor:rgba(0,0,0,0.4);
$menuitemHoverTextColor:#ffffff;
$menuitemHoverIconTextColor:#ffffff;

/* Active MenuItem */
$menuitemActiveBgColor:#7CB342;
$menuitemActiveTextColor:#ffffff;
$menuitemActiveIconTextColor:#ffffff;
$subMenuitemActiveTextColor:#9CCC65;
$subMenuitemActiveIconTextColor:#9CCC65;

/* Dark Default MenuItem */
$darkMenuitemTextColor:#dee0e3;
$darkMenuitemIconTextColor:#dee0e3;

/* Dark Hover MenuItem */
$darkMenuitemHoverBgColor:#rgba(255,255,255,0.4);
$darkMenuitemHoverTextColor:#ffffff;
$darkMenuitemHoverIconTextColor:#ffffff;

/* Dark Active MenuItem */
$darkMenuitemActiveBgColor:#7CB342;
$darkMenuitemActiveTextColor:#ffffff;
$darkMenuitemActiveIconTextColor:#ffffff;
$darksubMenuitemActiveTextColor:#9CCC65;
$darksubMenuitemActiveIconTextColor:#9CCC65;

@import '../../sass/layout/_layout';
</CodeHighlight>
</div>
                <h4>Common SASS Variables</h4>
                <p>In case you'd like to customize the shared variables, use the variables files under theme or layout folders.</p>

                <h5>sass/variables/_layout.scss</h5>
<CodeHighlight lang="css">
$textColor:rgba(0,0,0.87);
$textSecondaryColor:rgba(0,0,0,.60);
$fontSize:14px;
$fontFamily:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
$lineHeight:18px;
$transitionDuration:.2s;
$borderRadius:4px;
$inputOptionPadding:.625em .875em;
$hoverBgColor:#e8e8e8;
$hoverTextColor:#000000;
$activeMenuItemBadgeColor:#ffffff;
$activeMenuItemBadgeTextColor:#212121;
$dividerColor:#bdbdbd;
$letterSpacing:.25px;
$overlayMaskBgColor:#424242;

$bodyBgColor:#F5F5F5;
$topbarSubmenuHoverBgColor:#f1f2f7;
$topbarMobileMenuBgColor:#ffffff;
$mobileBreakpoint:1024px;
$menuScrollBarBgColor:#aaaaaa;
$topbarMenuBgColor:#ffffff;
$breadcrumbBgColor:#ffffff;
$footerBgColor:#ffffff;
</CodeHighlight>

                <h5>sass/variables/_theme.scss</h5>
<div style="overflow: auto; height: 400px; margin-bottom: 10px">
<CodeHighlight lang="css">
$emphasis-high:rgba(0,0,0.87);
$emphasis-medium:rgba(0,0,0,.60);
$emphasis-low:rgba(0,0,0,.38);
$emphasis-lower:rgba(0,0,0,.12);
$overlayColor:#000000;

//global
$fontFamily:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
$fontSize:1rem;
$fontWeight:normal;
$textColor:$emphasis-high;
$textSecondaryColor:$emphasis-medium;
$borderRadius:4px;
$transitionDuration:.2s;
$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration;
$listItemTransition:none;
$primeIconFontSize:1rem;
$divider:1px solid rgba(0,0,0,.12);
$inlineSpacing:.5rem;
$disabledOpacity:.38;
$maskBg:rgba(0, 0, 0, 0.32);
$loadingIconFontSize:2rem;
$errorColor:#B00020;

//selected state
$highlightBg:rgba($primaryColor, .12);
$highlightTextColor:$primaryColor;

//scale
$scaleSM:0.875;
$scaleLG:1.25;

//focus
$focusOutlineColor:transparent;
$focusOutline:0 none;
$focusOutlineOffset:0;
$focusShadow:none;

//action icons
$actionIconWidth:2.5rem;
$actionIconHeight:2.5rem;
$actionIconBg:transparent;
$actionIconBorder:0 none;
$actionIconColor:$textSecondaryColor;
$actionIconHoverBg:rgba(0,0,0,.04);
$actionIconHoverBorderColor:transparent;
$actionIconHoverColor:$textSecondaryColor;
$actionIconBorderRadius:50%;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:1rem 1rem;
$inputTextFontSize:1rem;
$inputBg:#ffffff;
$inputTextColor:$emphasis-high;
$inputIconColor:$emphasis-medium;
$inputBorder:1px solid $emphasis-low;
$inputHoverBorderColor:$emphasis-high;
$inputFocusBorderColor:$primaryColor;
$inputErrorBorderColor:$errorColor;
$inputPlaceholderTextColor:$emphasis-medium;
$inputFilledBg:#f5f5f5;
$inputFilledHoverBg:#ececec;
$inputFilledFocusBg:#dcdcdc;

//input groups
$inputGroupBg:$inputBg;
$inputGroupTextColor:$emphasis-medium;
$inputGroupAddOnMinWidth:2.357rem;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:#ffffff;
$inputListTextColor:$textColor;
$inputListBorder:1px solid #e5e5e5;
$inputListPadding:0;
$inputListItemPadding:1rem 1rem;
$inputListItemBg:transparent;
$inputListItemTextColor:$textColor;
$inputListItemHoverBg:rgba(0,0,0,.04);
$inputListItemTextHoverColor:$textColor;
$inputListItemBorder:0 none;
$inputListItemBorderRadius:0;
$inputListItemMargin:0;
$inputListItemFocusShadow:none;
$inputListHeaderPadding:1rem;
$inputListHeaderMargin:0;
$inputListHeaderBg:#ffffff;
$inputListHeaderTextColor:$textColor;
$inputListHeaderBorder:1px solid rgba(0,0,0,.12);

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg;
$inputOverlayHeaderBg:$inputListHeaderBg;
$inputOverlayBorder:0 none;
$inputOverlayShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

//button
$buttonPadding:0.714rem 1rem;
$buttonIconOnlyWidth:3rem;
$buttonIconOnlyPadding:0.714rem;
$buttonBg:$primaryColor;
$buttonTextColor:$primaryTextColor;
$buttonBorder:0 none;
$buttonHoverBg:rgba($primaryColor, .92);
$buttonTextHoverColor:$primaryTextColor;
$buttonHoverBorderColor:transparent;
$buttonActiveBg:rgba($primaryColor, .68);
$buttonTextActiveColor:$primaryTextColor;
$buttonActiveBorderColor:transparent;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
$roundedButtonBorderRadius:2rem;

$textButtonHoverBgOpacity:.04;
$textButtonActiveBgOpacity:.16;
$outlinedButtonBorder:1px solid;
$plainButtonTextColor:$textSecondaryColor;
$plainButtonHoverBgColor:rgba(0,0,0,.04);
$plainButtonActiveBgColor:rgba(0,0,0,.16);

$secondaryButtonBg:$accentColor;
$secondaryButtonTextColor:$accentTextColor;
$secondaryButtonBorder:0 none;
$secondaryButtonHoverBg:rgba($accentColor, .92);
$secondaryButtonTextHoverColor:$accentTextColor;
$secondaryButtonHoverBorderColor:transparent;
$secondaryButtonActiveBg:rgba($accentColor, .68);
$secondaryButtonTextActiveColor:$accentTextColor;
$secondaryButtonActiveBorderColor:transparent;
$secondaryButtonFocusShadow:none;

$infoButtonBg:#2196F3;
$infoButtonTextColor:#ffffff;
$infoButtonBorder:0 none;
$infoButtonHoverBg:rgba(#2196F3, .92);
$infoButtonTextHoverColor:#ffffff;
$infoButtonHoverBorderColor:transparent;
$infoButtonActiveBg:rgba(#2196F3, .68);
$infoButtonTextActiveColor:#ffffff;
$infoButtonActiveBorderColor:transparent;
$infoButtonFocusShadow:none;

$successButtonBg:#689F38;
$successButtonTextColor:#ffffff;
$successButtonBorder:0 none;
$successButtonHoverBg:rgba(#689F38, .92);
$successButtonTextHoverColor:#ffffff;
$successButtonHoverBorderColor:transparent;
$successButtonActiveBg:rgba(#689F38, .68);
$successButtonTextActiveColor:#ffffff;
$successButtonActiveBorderColor:transparent;
$successButtonFocusShadow:none;

$warningButtonBg:#FBC02D;
$warningButtonTextColor:#212529;
$warningButtonBorder:0 none;
$warningButtonHoverBg:rgba(#FBC02D, .92);
$warningButtonTextHoverColor:#212529;
$warningButtonHoverBorderColor:transparent;
$warningButtonActiveBg:rgba(#FBC02D, .68);
$warningButtonTextActiveColor:#212529;
$warningButtonActiveBorderColor:transparent;
$warningButtonFocusShadow:none;

$helpButtonBg:#9C27B0;
$helpButtonTextColor:#ffffff;
$helpButtonBorder:0 none;
$helpButtonHoverBg:rgba(#9C27B0, .92);
$helpButtonTextHoverColor:#ffffff;
$helpButtonHoverBorderColor:transparent;
$helpButtonActiveBg:rgba(#9C27B0, .68);
$helpButtonTextActiveColor:#ffffff;
$helpButtonActiveBorderColor:transparent;
$helpButtonFocusShadow:none;

$dangerButtonBg:#D32F2F;
$dangerButtonTextColor:#ffffff;
$dangerButtonBorder:0 none;
$dangerButtonHoverBg:rgba(#D32F2F, .92);
$dangerButtonTextHoverColor:#ffffff;
$dangerButtonHoverBorderColor:transparent;
$dangerButtonActiveBg:rgba(#D32F2F, .68);
$dangerButtonTextActiveColor:#ffffff;
$dangerButtonActiveBorderColor:transparent;
$dangerButtonFocusShadow:none;

$linkButtonColor:transparent;
$linkButtonHoverColor:transparent;
$linkButtonTextHoverDecoration:underline;
$linkButtonFocusShadow:none;

//checkbox
$checkboxWidth:18px;
$checkboxHeight:18px;
$checkboxBorder:2px solid #757575;
$checkboxIconFontSize:14px;
$checkboxActiveBorderColor:$primaryColor;
$checkboxActiveBg:$primaryColor;
$checkboxIconActiveColor:$primaryTextColor;
$checkboxActiveHoverBg:$primaryColor;
$checkboxIconActiveHoverColor:$primaryTextColor;
$checkboxActiveHoverBorderColor:$primaryColor;

//radiobutton
$radiobuttonWidth:20px;
$radiobuttonHeight:20px;
$radiobuttonBorder:2px solid #757575;
$radiobuttonIconSize:10px;
$radiobuttonActiveBorderColor:$primaryColor;
$radiobuttonActiveBg:$primaryTextColor;
$radiobuttonIconActiveColor:$primaryColor;
$radiobuttonActiveHoverBg:$primaryTextColor;
$radiobuttonIconActiveHoverColor:$primaryColor;
$radiobuttonActiveHoverBorderColor:$primaryColor;

//colorpicker
$colorPickerPreviewWidth:2rem;
$colorPickerPreviewHeight:2rem;
$colorPickerBg:#323232;
$colorPickerBorderColor:#191919;
$colorPickerHandleColor:#ffffff;

//togglebutton
$toggleButtonBg:#ffffff;
$toggleButtonBorder:1px solid rgba(0,0,0,.12);
$toggleButtonTextColor:$textColor;
$toggleButtonIconColor:$textSecondaryColor;
$toggleButtonHoverBg:#f6f6f6;
$toggleButtonHoverBorderColor:rgba(0,0,0,.12);
$toggleButtonTextHoverColor:$textColor;
$toggleButtonIconHoverColor:$textSecondaryColor;
$toggleButtonActiveBg:#e0e0e1;
$toggleButtonActiveBorderColor:#e0e0e1;
$toggleButtonTextActiveColor:$textColor;
$toggleButtonIconActiveColor:$textSecondaryColor;
$toggleButtonActiveHoverBg:#d9d8d9;
$toggleButtonActiveHoverBorderColor:#d9d8d9;
$toggleButtonTextActiveHoverColor:$textColor;
$toggleButtonIconActiveHoverColor:$textSecondaryColor;;

//inplace
$inplacePadding:$inputPadding;
$inplaceHoverBg:rgba(0,0,0,.04);
$inplaceTextHoverColor:$textColor;

//rating
$ratingIconFontSize:1.143rem;
$ratingCancelIconColor:#B00020;
$ratingCancelIconHoverColor:#B00020;
$ratingStarIconOffColor:$primaryColor;
$ratingStarIconOnColor:$primaryColor;
$ratingStarIconHoverColor:$primaryColor;

//slider
$sliderBg:#c1c1c1;
$sliderBorder:0 none;
$sliderHorizontalHeight:2px;
$sliderVerticalWidth:2px;
$sliderHandleWidth:20px;
$sliderHandleHeight:20px;
$sliderHandleBg:$primaryColor;
$sliderHandleBorder:0 none;
$sliderHandleBorderRadius:50%;
$sliderHandleHoverBorderColor:0 none;
$sliderHandleHoverBg:$primaryColor;
$sliderRangeBg:$primaryColor;

//calendar
$calendarTableMargin:.5rem 0;
$calendarPadding:.5rem;
$calendarBg:#ffffff;
$calendarInlineBg:$calendarBg;
$calendarTextColor:$textColor;
$calendarBorder:$inputListBorder;
$calendarOverlayBorder:$inputOverlayBorder;

$calendarHeaderPadding:.5rem;
$calendarHeaderBg:#ffffff;
$calendarInlineHeaderBg:$calendarBg;
$calendarHeaderBorder:$divider;
$calendarHeaderTextColor:$textColor;
$calendarHeaderFontWeight:500;
$calendarHeaderCellPadding:.5rem;

$calendarCellDatePadding:.5rem;
$calendarCellDateWidth:2.5rem;
$calendarCellDateHeight:2.5rem;
$calendarCellDateBorderRadius:50%;
$calendarCellDateBorder:1px solid transparent;
$calendarCellDateHoverBg:rgba(0,0,0,.04);
$calendarCellDateTodayBg:#ffffff;
$calendarCellDateTodayBorderColor: rgba(0,0,0,12);
$calendarCellDateTodayTextColor:$textColor;

$calendarButtonBarPadding:1rem 0;
$calendarTimePickerPadding:.5rem;
$calendarTimePickerElementPadding:0 .5rem;
$calendarTimePickerTimeFontSize:1.25rem;

$calendarBreakpoint:769px;
$calendarCellDatePaddingSM:0;

//input switch
$inputSwitchWidth:2.75rem;
$inputSwitchHeight:1rem;
$inputSwitchBorderRadius:.5rem;
$inputSwitchHandleWidth:1.50rem;
$inputSwitchHandleHeight:1.50rem;
$inputSwitchHandleBorderRadius:50%;
$inputSwitchSliderPadding:-1px;
$inputSwitchSliderOffBg:rgba(0,0,0,.38);
$inputSwitchHandleOffBg:#ffffff;
$inputSwitchSliderOffHoverBg:rgba(0,0,0,.38);
$inputSwitchSliderOnBg:rgba($primaryColor, .5);
$inputSwitchSliderOnHoverBg:rgba($primaryColor, .5);
$inputSwitchHandleOnBg:$primaryColor;

//panel
$panelHeaderBorder:1px solid #e0e0e0;
$panelHeaderBg:#ffffff;
$panelHeaderTextColor:$textColor;
$panelHeaderFontWeight:500;
$panelHeaderPadding:1rem;
$panelToggleableHeaderPadding:.5rem 1rem;

$panelHeaderHoverBg:rgba(0,0,0,.04);
$panelHeaderHoverBorderColor:#e0e0e0;
$panelHeaderTextHoverColor:$textColor;

$panelContentBorder:1px solid #e0e0e0;
$panelContentBg:#ffffff;
$panelContentTextColor:$textColor;
$panelContentPadding:1rem;

$panelFooterBorder:1px solid #e0e0e0;
$panelFooterBg:#ffffff;
$panelFooterTextColor:$textColor;
$panelFooterPadding:1rem 1rem;

//accordion
$accordionSpacing:0;
$accordionHeaderBorder:0 none;
$accordionHeaderBg:#ffffff;
$accordionHeaderTextColor:$textColor;
$accordionHeaderFontWeight:400;
$accordionHeaderPadding:1.5rem;

$accordionHeaderHoverBg:#f6f6f6;
$accordionHeaderHoverBorderColor:transparent;
$accordionHeaderTextHoverColor:$textColor;

$accordionHeaderActiveBg:#ffffff;
$accordionHeaderActiveBorderColor:transparent;
$accordionHeaderTextActiveColor:$textColor;

$accordionHeaderActiveHoverBg:#ffffff;
$accordionHeaderActiveHoverBorderColor:transparent;
$accordionHeaderTextActiveHoverColor:$textColor;

$accordionContentBorder:0 none;
$accordionContentBg:#ffffff;
$accordionContentTextColor:$textColor;
$accordionContentPadding:1rem 1.5rem;

//tabview
$tabviewNavBorder:solid rgba(0,0,0,.12);
$tabviewNavBorderWidth:0 0 1px 0;
$tabviewNavBg:#ffffff;

$tabviewHeaderSpacing:0;
$tabviewHeaderBorder:none;
$tabviewHeaderBorderWidth:0 0 0 0;
$tabviewHeaderBorderColor:transparent transparent transparent transparent;
$tabviewHeaderBg:#ffffff;
$tabviewHeaderTextColor:$textSecondaryColor;
$tabviewHeaderFontWeight:500;
$tabviewHeaderPadding:1rem 1.5rem;
$tabviewHeaderMargin:0 0 0 0;

$tabviewHeaderHoverBg:rgba($primaryColor,.04);
$tabviewHeaderHoverBorderColor:transparent;
$tabviewHeaderTextHoverColor:$textSecondaryColor;

$tabviewHeaderActiveBg:#ffffff;
$tabviewHeaderActiveBorderColor:transparent;
$tabviewHeaderTextActiveColor:$primaryColor;

$tabviewContentBorder:0 none;
$tabviewContentBg:#ffffff;
$tabviewContentTextColor:$textColor;
$tabviewContentPadding:$panelContentPadding;

//upload
$fileUploadProgressBarHeight:4px;
$fileUploadContentPadding:2rem 1rem;

//scrollpanel
$scrollPanelTrackBorder:0 none;
$scrollPanelTrackBg:rgba(0,0,0,.12);

//card
$cardBodyPadding:1rem;
$cardTitleFontSize:1.5rem;
$cardTitleFontWeight:700;
$cardSubTitleFontWeight:400;
$cardSubTitleColor:$textSecondaryColor;
$cardContentPadding:1rem 0;
$cardFooterPadding:1rem 0 0 0;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);

//editor
$editorToolbarBg:$panelHeaderBg;
$editorToolbarBorder:$panelHeaderBorder;
$editorToolbarPadding:$panelHeaderPadding;
$editorToolbarIconColor:$textSecondaryColor;
$editorToolbarIconHoverColor:$textColor;
$editorIconActiveColor:$primaryColor;
$editorContentBorder:$panelContentBorder;
$editorContentBg:$panelContentBg;

//paginator
$paginatorBg:#ffffff;
$paginatorTextColor:$textColor;
$paginatorBorder:solid #e4e4e4;
$paginatorBorderWidth:0;
$paginatorPadding:.5rem 1rem;
$paginatorElementWidth:$buttonIconOnlyWidth;
$paginatorElementHeight:$buttonIconOnlyWidth;
$paginatorElementBg:transparent;
$paginatorElementBorder:0 none;
$paginatorElementIconColor:$textSecondaryColor;
$paginatorElementHoverBg:rgba(0,0,0,.04);
$paginatorElementHoverBorderColor:transparent;
$paginatorElementIconHoverColor:$textSecondaryColor;
$paginatorElementBorderRadius:50%;
$paginatorElementMargin:.143rem;
$paginatorElementPadding:0;

//table
$tableHeaderBorder:1px solid #e4e4e4;
$tableHeaderBorderWidth:0 0 1px 0;
$tableHeaderBg:#ffffff;
$tableHeaderTextColor:$textColor;
$tableHeaderFontWeight:500;
$tableHeaderPadding:1rem 1rem;

$tableHeaderCellPadding:1rem 1rem;
$tableHeaderCellBg:#ffffff;
$tableHeaderCellTextColor:$textColor;
$tableHeaderCellFontWeight:500;
$tableHeaderCellBorder:1px solid #e4e4e4;
$tableHeaderCellBorderWidth:0 0 1px 0;
$tableHeaderCellHoverBg:rgba(0,0,0,.04);
$tableHeaderCellTextHoverColor:$textColor;
$tableHeaderCellIconColor:$textSecondaryColor;
$tableHeaderCellIconHoverColor:$textSecondaryColor;
$tableHeaderCellHighlightBg:#ffffff;
$tableHeaderCellHighlightTextColor:$textColor;
$tableHeaderCellHighlightHoverBg:rgba(0,0,0,.04);
$tableHeaderCellHighlightTextHoverColor:$textColor;
$tableSortableColumnBadgeSize:1.143rem;

$tableBodyRowBg:#ffffff;
$tableBodyRowTextColor:$textColor;
$tableBodyRowEvenBg:rgba(0,0,0,.02);
$tableBodyRowHoverBg:rgba(0,0,0,.04);
$tableBodyRowTextHoverColor:$textColor;
$tableBodyCellBorder:1px solid #e4e4e4;
$tableBodyCellBorderWidth:0 0 1px 0;
$tableBodyCellPadding:1rem 1rem;

$tableFooterCellPadding:1rem 1rem;
$tableFooterCellBg:#ffffff;
$tableFooterCellTextColor:$textColor;
$tableFooterCellFontWeight:500;
$tableFooterCellBorder:1px solid #e4e4e4;
$tableFooterCellBorderWidth:0 0 1px 0;
$tableResizerHelperBg:$primaryColor;

$tableFooterBorder:1px solid #e4e4e4;
$tableFooterBorderWidth:0 0 1px 0;
$tableFooterBg:#ffffff;
$tableFooterTextColor:$textColor;
$tableFooterFontWeight:500;
$tableFooterPadding:1rem 1rem;

$tableCellContentAlignment:left;
$tableTopPaginatorBorderWidth:0 0 1px 0;
$tableBottomPaginatorBorderWidth:0 0 1px 0;

$tableScaleSM:0.5;
$tableScaleLG:1.25;

//dataview
$dataViewContentPadding:1rem 0;
$dataViewContentBorder:0 none;
$dataViewListItemBorder:solid rgba(0,0,0,.12);
$dataViewListItemBorderWidth:0 0 1px 0;

//orderlist, picklist
$orderListBreakpoint:769px;
$pickListBreakpoint:769px;

//schedule
$fullCalendarEventBg:$highlightBg;
$fullCalendarEventBorder:1px solid $highlightBg;
$fullCalendarEventTextColor:$highlightTextColor;

//tree
$treeNodePadding:.25rem;
$treeNodeContentPadding:.75rem;
$treeNodeChildrenPadding:0 0 0 1rem;
$treeNodeIconColor:$textSecondaryColor;

//org chart
$organizationChartConnectorColor:rgba(0,0,0,.12);

//message
$messageMargin:1rem 0;
$messagePadding: 1.25rem 1.5rem;
$messageBorderWidth:0 0 0 0;
$messageIconFontSize:1.5rem;
$messageTextFontSize:1rem;
$messageTextFontWeight:500;

//inline message
$inlineMessagePadding:$inputPadding;
$inlineMessageMargin:0;
$inlineMessageIconFontSize:1rem;
$inlineMessageTextFontSize:1rem;
$inlineMessageBorderWidth:1px;

//toast
$toastIconFontSize:2rem;
$toastMessageTextMargin:0 0 0 1rem;
$toastMargin:0 0 1rem 0;
$toastPadding:1.5rem;
$toastBorderWidth:0 0 0 0;
$toastShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
$toastOpacity:.9;
$toastTitleFontWeight:700;
$toastDetailMargin:$inlineSpacing 0 0 0;

//severities
$infoMessageBg:#B3E5FC;
$infoMessageBorder:solid transparent;
$infoMessageTextColor:#01579B;
$infoMessageIconColor:#01579B;
$successMessageBg:#C8E6C9;
$successMessageBorder:solid transparent;
$successMessageTextColor:#1B5E20;
$successMessageIconColor:#1B5E20;
$warningMessageBg:#FFECB3;
$warningMessageBorder:solid transparent;
$warningMessageTextColor:#7f6003;
$warningMessageIconColor:#7f6003;
$errorMessageBg:#FFCDD2;
$errorMessageBorder:solid transparent;
$errorMessageTextColor:#B71C1C;
$errorMessageIconColor:#B71C1C;

//overlays
$overlayContentBorder:0 none;
$overlayContentBg:$panelContentBg;
$overlayContainerShadow:0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);

//dialog
$dialogHeaderBg:#ffffff;
$dialogHeaderBorder:0 none;
$dialogHeaderTextColor:$textColor;
$dialogHeaderFontWeight:500;
$dialogHeaderFontSize:1.25rem;
$dialogHeaderPadding:1.5rem;
$dialogContentPadding: 0 1.5rem 1.5rem 1.5rem;
$dialogFooterBorder:0 none;
$dialogFooterPadding:1rem 1.5rem;

//tooltip
$tooltipBg:rgba(97,97,97,.9);
$tooltipTextColor:#ffffff;
$tooltipPadding:.5rem;

//steps
$stepsItemBg:transparent;
$stepsItemBorder:1px solid transparent;
$stepsItemTextColor:$textColor;
$stepsItemNumberWidth:2rem;
$stepsItemNumberHeight:2rem;
$stepsItemNumberFontSize:1.143rem;
$stepsItemNumberColor:$textColor;
$stepsItemNumberBorderRadius:50%;
$stepsItemActiveFontWeight:500;

//progressbar
$progressBarHeight:4px;
$progressBarBorder:0 none;
$progressBarBg:rgba($primaryColor, .32);
$progressBarValueBg:$primaryColor;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem;
$menuBg:#ffffff;
$menuBorder:1px solid #e5e5e5;
$menuTextColor:$textColor;
$menuitemPadding:1rem 1rem;
$menuitemBorderRadius:0;
$menuitemTextColor:$textColor;
$menuitemIconColor:$textSecondaryColor;
$menuitemTextHoverColor:$textColor;
$menuitemIconHoverColor:$textSecondaryColor;
$menuitemHoverBg:rgba(0,0,0,.04);
$menuitemTextActiveColor:$textColor;
$menuitemIconActiveColor:$textSecondaryColor;
$menuitemActiveBg:rgba(0,0,0,.04);
$menuitemSubmenuIconFontSize:.875rem;
$submenuHeaderMargin:0;
$submenuHeaderPadding:1rem;
$submenuHeaderBg:#ffffff;
$submenuHeaderTextColor:$textSecondaryColor;
$submenuHeaderBorderRadius:0;
$submenuHeaderFontWeight:400;
$overlayMenuBg:$menuBg;
$overlayMenuBorder:0 none;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
$verticalMenuPadding:.5rem 0;
$menuSeparatorMargin:.5rem 0;

$breadcrumbPadding:1rem;
$breadcrumbBg:#ffffff;
$breadcrumbBorder:1px solid #e5e5e5;
$breadcrumbItemTextColor:$textColor;
$breadcrumbItemIconColor:$textSecondaryColor;
$breadcrumbLastItemTextColor:$textColor;
$breadcrumbLastItemIconColor:$textSecondaryColor;
$breadcrumbSeparatorColor:$textSecondaryColor;

$horizontalMenuPadding:1rem;
$horizontalMenuBg:transparent;
$horizontalMenuBorder:1px solid #e5e5e5;
$horizontalMenuTextColor:$textColor;
$horizontalMenuRootMenuitemPadding:1rem;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius;
$horizontalMenuRootMenuitemTextColor:$textColor;
$horizontalMenuRootMenuitemIconColor:$textSecondaryColor;
$horizontalMenuRootMenuitemTextHoverColor:$textColor;
$horizontalMenuRootMenuitemIconHoverColor:$textSecondaryColor;
$horizontalMenuRootMenuitemHoverBg:rgba(0,0,0,.04);
$horizontalMenuRootMenuitemTextActiveColor:$textColor;
$horizontalMenuRootMenuitemIconActiveColor:$textSecondaryColor;
$horizontalMenuRootMenuitemActiveBg:rgba(0,0,0,.04);

//badge and tag
$badgeBg:$primaryColor;
$badgeTextColor:$primaryTextColor;
$badgeMinWidth:1.5rem;
$badgeHeight:1.5rem;
$badgeFontWeight:700;
$badgeFontSize:.75rem;

$tagPadding:.25rem .4rem;

//carousel
$carouselIndicatorsPadding:1rem;
$carouselIndicatorBg:#dcdcdc;
$carouselIndicatorHoverBg:#ececec;
$carouselIndicatorBorderRadius:0;
$carouselIndicatorWidth:2rem;
$carouselIndicatorHeight:.5rem;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9);
$galleriaCloseIconMargin:.5rem;
$galleriaCloseIconFontSize:2rem;
$galleriaCloseIconBg:transparent;
$galleriaCloseIconColor:rgba(255,255,255,.87);
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1);
$galleriaCloseIconHoverColor:rgba(255,255,255,.87);
$galleriaCloseIconWidth:4rem;
$galleriaCloseIconHeight:4rem;
$galleriaCloseIconBorderRadius:50%;

$galleriaItemNavigatorBg:transparent;
$galleriaItemNavigatorColor:#f6f6f6;
$galleriaItemNavigatorMargin:0 .5rem;
$galleriaItemNavigatorFontSize:2rem;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaItemNavigatorHoverColor:rgba(255,255,255,.87);
$galleriaItemNavigatorWidth:4rem;
$galleriaItemNavigatorHeight:4rem;
$galleriaItemNavigatorBorderRadius:50%;

$galleriaCaptionBg:rgba(0,0,0,.5);
$galleriaCaptionTextColor:rgba(255,255,255,.87);
$galleriaCaptionPadding:1rem;

$galleriaIndicatorsPadding:1rem;
$galleriaIndicatorBg:#dcdcdc;
$galleriaIndicatorHoverBg:#ececec;
$galleriaIndicatorBorderRadius:50%;
$galleriaIndicatorWidth:1.25rem;
$galleriaIndicatorHeight:1.25rem;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4);
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);

$galleriaThumbnailContainerBg:rgba(0,0,0,.9);
$galleriaThumbnailContainerPadding:1rem .25rem;
$galleriaThumbnailNavigatorBg:transparent;
$galleriaThumbnailNavigatorColor:rgba(255,255,255,.87);
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaThumbnailNavigatorHoverColor:rgba(255,255,255,.87);
$galleriaThumbnailNavigatorBorderRadius:50%;
$galleriaThumbnailNavigatorWidth:2rem;
$galleriaThumbnailNavigatorHeight:2rem;

:root {
--surface-a:#ffffff;
--surface-b:#fafafa;
--surface-c:rgba(0,0,0,.04);
--surface-d:rgba(0,0,0,.12);
--surface-e:#ffffff;
--surface-f:#ffffff;
--text-color:#{$textColor};
--text-color-secondary:#{textSecondaryColor};
--primary-color:#{$primaryColor};
--primary-color-text:#{$primaryTextColor};
--font-family:#{$fontFamily};
}
</CodeHighlight>
</div>

                <h4>Menu Modes</h4>
                <p>Menu has 3 modes; static, overlay (default) and horizontal. Layout container element in App.vue is used to define which mode to use by adding specific classes. List
                below indicates the style classes for each mode.</p>

                <ul>
                    <li>Static: "layout-wrapper layout-wrapper-static"</li>
                    <li>Overlay: "layout-wrapper"</li>
                    <li>Horizontal: "layout-wrapper layout-menu-horizontal"</li>
                </ul>

                <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                application has an example implementation of such use case. Refer to App.vue for an example.</p>

                <h4>Customizing Styles</h4>
                <p>It is suggested to add your customizations in the following sass files under the overrides folder instead of adding them to the
                    scss files under sass folder to avoid maintenance issues after an update.</p>

                <ul>
                    <li><b>_layout_variables</b>: Variables of the layout.</li>
                    <li><b>_layout_styles</b>: Styles for the layout.</li>
                    <li><b>_theme_variables</b>: Variables of the theme.</li>
                    <li><b>_theme_styles</b>: Styles for the theme.</li>
                </ul>

                <h4>Migration Guide</h4>
                <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeHighlight from './CodeHighlight';

    export default {
        components: {
            'CodeHighlight': CodeHighlight
        }
    }
</script>

<style scoped lang="scss">
    /deep/ pre[class*="language-"] {
        &:before, &:after {
            display: none !important;
        }

        code {
            border-left: 10px solid var(--surface-d) !important;
            box-shadow: none !important;
            background: var(--surface-b) !important;
            margin: 1em 0;
            color: var(--text-color);
            font-size: 14px;

            .token {
                &.tag,
                &.keyword {
                    color: #2196F3 !important;
                }

                &.attr-name,
                &.attr-string {
                    color: #2196F3 !important;
                }

                &.attr-value {
                    color: #4CAF50 !important;
                }

                &.punctuation {
                    color: var(--text-color);
                }

                &.operator,
                &.string {
                    background: transparent;
                }
            }
        }
    }

    i {
        background-color: #fcf2a7;
        font-family: monaco,Consolas,Lucida Console,monospace;
        font-weight: 700;
        font-style: normal;
        font-size: 14px;
        padding: 2px;
    }

    li {
        line-height: 1.5;
    }
</style>
