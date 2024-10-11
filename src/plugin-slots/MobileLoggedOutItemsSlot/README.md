# Mobile Logged Out Items Slot

### Slot ID: `mobile_logged_out_items_slot`

## Description

This slot is used to replace/modify/hide the mobile user menu when logged out.

## Examples

### Modify Items

The following `env.config.jsx` will modify the items in mobile user menu when logged out.

```jsx
import { PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const modifyLoggedOutItems = ( widget ) => {
  widget.content.items = [
    {
      type: 'item',
      href: 'https://openedx.org/',
      content: 'openedx.org',
    },
    {
      type: 'item',
      href: 'https://docs.openedx.org/en/latest/',
      content: 'Documentation',
    },
    {
      type: 'item',
      href: 'https://discuss.openedx.org/',
      content: 'Forums',
    }
  ];
  return widget;
};

const config = {
  pluginSlots: {
    mobile_logged_out_items_slot: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Modify,
          widgetId: 'default_contents',
          fn: modifyLoggedOutItems,
        },
      ]
    },
  },
}

export default config;
```

### Replace Items with Custom Component

The following `env.config.jsx` will replace the items in mobile user menu when logged out entirely (in this case with a centered 🗺️ `h1`)

```jsx
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    mobile_logged_out_items_slot: {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_logged_out_items_component',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🗺️</h1>
            ),
          },
        },
      ]
    },
  },
}

export default config;
```

### Add Custom Components before and after Items

The following `env.config.jsx` will place custom components before and after the items in mobile user menu when logged out (in this case centered `h1`s with 🌞 and 🌚).

```jsx
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    mobile_logged_out_items_slot: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_before_logged_out_items_component',
            type: DIRECT_PLUGIN,
            priority: 10,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🌞</h1>
            ),
          },
        },
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_after_logged_out_items_component',
            type: DIRECT_PLUGIN,
            priority: 90,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🌚</h1>
            ),
          },
        },
      ]
    },
  },
}

export default config;
```

