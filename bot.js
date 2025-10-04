require('dotenv').config();
const { Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    try {
        switch (interaction.commandName) {
            case 'clear':
                if (!interaction.memberPermissions.has(PermissionFlagsBits.ManageMessages)) {
                    return await interaction.reply({
                        content: 'You do not have permission to use this command!',
                        ephemeral: true
                    });
                }
                const amount = interaction.options.getInteger('amount');
                await interaction.channel.bulkDelete(amount);
                await interaction.reply({
                    content: `Deleted ${amount} messages!`,
                    ephemeral: true
                });
                break;

            case 'ban':
                if (!interaction.memberPermissions.has(PermissionFlagsBits.BanMembers)) {
                    return await interaction.reply({
                        content: 'You do not have permission to use this command!',
                        ephemeral: true
                    });
                }
                const userToBan = interaction.options.getUser('user');
                const banReason = interaction.options.getString('reason') || 'No reason provided';
                await interaction.guild.members.ban(userToBan, { reason: banReason });
                await interaction.reply({
                    content: `Banned ${userToBan.tag} for: ${banReason}`,
                    ephemeral: true
                });
                break;

            case 'kick':
                if (!interaction.memberPermissions.has(PermissionFlagsBits.KickMembers)) {
                    return await interaction.reply({
                        content: 'You do not have permission to use this command!',
                        ephemeral: true
                    });
                }
                const userToKick = interaction.options.getUser('user');
                const kickReason = interaction.options.getString('reason') || 'No reason provided';
                await interaction.guild.members.kick(userToKick, kickReason);
                await interaction.reply({
                    content: `Kicked ${userToKick.tag} for: ${kickReason}`,
                    ephemeral: true
                });
                break;

            case 'timeout':
                if (!interaction.memberPermissions.has(PermissionFlagsBits.ModerateMembers)) {
                    return await interaction.reply({
                        content: 'You do not have permission to use this command!',
                        ephemeral: true
                    });
                }
                const userToTimeout = interaction.options.getUser('user');
                const duration = interaction.options.getInteger('duration');
                const timeoutReason = interaction.options.getString('reason') || 'No reason provided';
                const member = await interaction.guild.members.fetch(userToTimeout.id);
                await member.timeout(duration * 60 * 1000, timeoutReason);
                await interaction.reply({
                    content: `Timed out ${userToTimeout.tag} for ${duration} minutes. Reason: ${timeoutReason}`,
                    ephemeral: true
                });
                break;
        }
    } catch (error) {
        console.error('Error:', error);
        await interaction.reply({
            content: 'There was an error executing this command!',
            ephemeral: true
        }).catch(() => {});
    }
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.login(process.env.DISCORD_TOKEN);
