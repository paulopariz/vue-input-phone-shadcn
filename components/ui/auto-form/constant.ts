import AutoFormFieldPhone from "./AutoFormFieldPhone.vue";

export const INPUT_COMPONENTS = {
  phone: AutoFormFieldPhone,
};

/**
 * Define handlers for specific Zod types.
 * You can expand this object to support more types.
 */
export const DEFAULT_ZOD_HANDLERS: {
  [key: string]: keyof typeof INPUT_COMPONENTS;
} = {
  ZodPhone: "phone",
};
