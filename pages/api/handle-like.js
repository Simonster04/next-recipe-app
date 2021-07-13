import { sanityClient } from "../../lib/sanity";

sanityClient.config({
    token: "skJ1uTeHQ9VOu8nK5RnhdQGpS6lrSByA5CrLHZY5dquHaouzMeHOzivpKv2KaOVJ7P8zfXGwakjH9I6ywCGKhKguN7baCtmOesevEscV6UaV3wFnGlOhkcU8GpJ3jW0cwPzo3Ox0A1xEVMovkVpuIVGOPgXZhtBWLTSgVa3GUkETTgK9y8BJ"
});

export default async function likeButtonHandler(req, res) {
    const { _id } = JSON.parse(req.body);
    const data = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error) => console.log(error));

    res.status(200).json({ likes: data.likes });
}
