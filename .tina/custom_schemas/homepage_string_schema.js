export const homepage_string_schema = {
  label: "Homepage Texts",
  name: "homepage_texts_fetch",
  path: "content",
  format: "json",
  fields: [
    {
      label: "Home Title",
      name: "home_title",
      type: "string",
    },
    {
      label: "Home Subtitle",
      name: "home_subtitle",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Blockchain Network Title",
      name: "blockchain_network_title",
      type: "string",
    },
    {
      label: "Blockchain Network",
      name: "blockchain_network_items",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "Icon",
          name: "icon",
          type: "image",
          parse: (media) => {
            return `${media}`; // This is how the image is saved in public/uploads
          },
          previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
        },
      ],
    },
    {
      label: "Products Title",
      name: "products_title",
      type: "string",
    },
    {
      label: "Products Text",
      name: "products_text",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Products",
      name: "products_items",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "Icon",
          name: "icon",
          type: "image",
          parse: (media) => {
            return `${media}`; // This is how the image is saved in public/uploads
          },
          previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
        },
      ],
    },
    {
      label: "Global Title",
      name: "global_title",
      type: "string",
    },
    {
      label: "Global Image",
      name: "global_image",
      type: "image",
      parse: (media) => {
        return `${media}`; // This is how the image is saved in public/uploads
      },
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
    },
    {
      label: "Blockchain Solutions",
      name: "blockchain_solutions",
      type: "object",
      fields: [
        {
          label: "Enabled",
          name: "enabled",
          type: "boolean",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Products",
          name: "items",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title };
            },
          },
          fields: [
            {
              label: "Title",
              name: "title",
              type: "string",
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ],
};
