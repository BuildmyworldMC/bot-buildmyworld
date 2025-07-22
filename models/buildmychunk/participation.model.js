export default class BuildmychunkParticipation {
	static onePointReaction = '1️⃣';
	static twoPointsReaction = '2️⃣';
	static threePointsReaction = '3️⃣';
	static fourPointsReaction = '4️⃣';
	static fivePointsReaction = '5️⃣';

	constructor (name, srcMessage) {
		this.name = name;
		this.srcMessage = srcMessage;
		this.position = 0;
		this.score = 0;
	}

	async refreshMessage(client) {
		this.srcMessage = await client.channels.cache.get(this.srcMessage.channelId).messages.fetch(this.srcMessage.id, { force: true });
	}

	async computeScore(client) {
		const excludeBotReactions = 1;
		let score = 0;

		await this.refreshMessage(client);

		// Helper to get fresh reaction count
		const getReactionCount = async (message, emoji) => {
			const reaction = message.reactions.cache.get(emoji);
			if (reaction) {
				await reaction.fetch();
				return reaction.count;
			}
			return 0;
		};

		const one = await getReactionCount(this.srcMessage, BuildmychunkParticipation.onePointReaction);
		const two = await getReactionCount(this.srcMessage, BuildmychunkParticipation.twoPointsReaction);
		const three = await getReactionCount(this.srcMessage, BuildmychunkParticipation.threePointsReaction);
		const four = await getReactionCount(this.srcMessage, BuildmychunkParticipation.fourPointsReaction);
		const five = await getReactionCount(this.srcMessage, BuildmychunkParticipation.fivePointsReaction);

		score += one - excludeBotReactions;
		score += (two - excludeBotReactions) * 2;
		score += (three - excludeBotReactions) * 3;
		score += (four - excludeBotReactions) * 4;
		score += (five - excludeBotReactions) * 5;

		return score;
	}

	getPositionEmoji() {
		switch (this.position) {
			case 1:
				return '🥇';

			case 2:
				return '🥈';

			case 3:
				return '🥉';

			default:
				return '🏅';
		}
	}
}
