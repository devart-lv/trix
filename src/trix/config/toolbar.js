import lang from "trix/config/lang"

export default {
  getDefaultHTML() {
    return `<div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="${lang.bold}" tabindex="-1">${lang.bold}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="${lang.italic}" tabindex="-1">${lang.italic}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="${lang.strike}" tabindex="-1">${lang.strike}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="${lang.link}" tabindex="-1">${lang.link}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-left" data-trix-attribute="textstart" title="${lang.left}">${lang.left}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-center" data-trix-attribute="textcenter" title="${lang.center}">${lang.center}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-right" data-trix-attribute="textend" title="${lang.right}">${lang.right}</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <span class="dropdown trix-button trix-button--icon">
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="${lang.heading1}" tabindex="-1">${lang.heading1}</button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-2" data-trix-attribute="heading2" title="${lang.heading2}" tabindex="-1">${lang.heading2}</button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-3" data-trix-attribute="heading3" title="${lang.heading3}" tabindex="-1">${lang.heading3}</button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-4" data-trix-attribute="heading4" title="${lang.heading4}" tabindex="-1">${lang.heading4}</button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-5" data-trix-attribute="heading5" title="${lang.heading5}" tabindex="-1">${lang.heading5}</button>
          <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-6" data-trix-attribute="heading6" title="${lang.heading6}" tabindex="-1">${lang.heading6}</button>
        </span>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="${lang.quote}" tabindex="-1">${lang.quote}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="${lang.code}" tabindex="-1">${lang.code}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="${lang.bullets}" tabindex="-1">${lang.bullets}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="${lang.numbers}" tabindex="-1">${lang.numbers}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="${lang.outdent}" tabindex="-1">${lang.outdent}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="${lang.indent}" tabindex="-1">${lang.indent}</button>
      </span>

      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="${lang.attachFiles}" tabindex="-1">${lang.attachFiles}</button>
      </span>

      <span class="trix-button-group-spacer"></span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="${lang.undo}" tabindex="-1">${lang.undo}</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="${lang.redo}" tabindex="-1">${lang.redo}</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="text" name="href" class="trix-input trix-input--dialog" placeholder="${lang.urlPlaceholder}" aria-label="${lang.url}" required data-trix-input>
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="${lang.link}" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="${lang.unlink}" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>`
  },
}
