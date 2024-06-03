import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
	DATABASE_URL: string
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate())

		const response = await prisma.log.create({
			data: {
				level: "Info",
				message: `hello`,
				meta: {
					headers: JSON.stringify(request.headers),
				},
			},
		})

		console.log(JSON.stringify(response))
		
		return Response.json(response)
	},
}