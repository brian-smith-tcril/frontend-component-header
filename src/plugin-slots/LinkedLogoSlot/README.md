# Linked Logo Slot

### Slot ID: `linked_logo_slot`

## Description

This slot is used to replace/modify/hide the linked logo.

## Examples

### Change link URL

The following `env.config.jsx` will modify the link href for the linked logo.

```jsx
import { PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const modifyLogoHref = ( logo ) => {
  logo.RenderWidget.props.content.href = "https://openedx.org/";
  return logo;
};

const config = {
  pluginSlots: {
    linked_logo_slot: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Modify,
          widgetId: 'default_contents',
          fn: modifyLogoHref,
        },
      ]
    },
  },
}

export default config;
```

### Custom Logo Component

The following `env.config.jsx` will replace the linked logo entirely (in this case with a centered 🗺️ `h1`)

```jsx
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    linked_logo_slot: {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_logo_component',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🗺️</h1>
            ),
          },
        },
      ]
    }
  },
}

export default config;
```