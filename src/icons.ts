import { html } from 'lit'
/**
 * Inlined icons as svg vs fetching the iconfont
 * Icons are inlined using the rollup-plugin-material-symbols [see](./config/rollup.config.js)
 *
 * Adding an icon
 * go to https://fonts.google.com/icons
 * find the name of the desired icon
 *
 * add to iconset like
 * <span name="icon_name">@"symbol"-icon_name></span>
 *
 * use in app
 * <custom-icon icon="icon_name"></custom-icon>
 * <custom-icon-button icon="icon_name"></custom-icon-button>
 */
export default html`
  <custom-icon-set>
    <template>
      <span name="menu">@symbol-menu</span>
      <span name="menu_open">@symbol-menu_open</span>
      <span name="home">@symbol-home</span>
      <span name="check">@symbol-check</span>
      <span name="pen">@symbol-edit_note</span>
      <span name="groups">@symbol-groups</span>
      <span name="language">@symbol-language</span>
      <span name="cancel">@symbol-cancel</span>
      <span name="info">@symbol-info</span>
      <span name="close">@symbol-close</span>
      <span name="pdf">@symbol-picture_as_pdf</span>
    </template>
  </custom-icon-set>
`
