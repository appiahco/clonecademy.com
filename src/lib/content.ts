import { type CollectionEntry, getCollection, getEntry } from "astro:content";

export const getRoles = async () =>
	(await getCollection("roles")).sort((a, b) => a.data.order - b.data.order);

export const getProducts = async () =>
	(await getCollection("products")).sort((a, b) => a.data.order - b.data.order);

/** A product's layers with each role resolved to its entry. */
export const getLayers = async (product: CollectionEntry<"products">) =>
	Promise.all(
		product.data.layers.map(async (layer) => {
			const role = await getEntry(layer.role);
			return { ...layer, role: role.data.short, roleId: role.id };
		}),
	);

/** What one role ships on a product. */
export const getDeliverables = (
	product: CollectionEntry<"products">,
	roleId: string,
) => product.data.deliverables.find((d) => d.role.id === roleId)?.items ?? [];
