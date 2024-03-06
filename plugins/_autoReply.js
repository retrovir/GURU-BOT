export async function all(m) {
  
  // Define the custom message you want to send back
  const customMessage = "Owner is busy, he will soon reply to you.";
  
  // Check if the message is not from the bot itself and if it contains "hi" or "hello"
  if ((m.text.toLowerCase().includes('hi') || m.text.toLowerCase().includes('hello')) && !m.isGroup && !m.isBaileys) {
    // Extract the username of the sender
    const senderName = m.sender.split('@')[0];

    // Send the custom message back
    this.sendMessage(m.chat, { text: Hello @${senderName}\n${customMessage}\n\n_For more info, you can DM the owner_\nType \\\.owner\\\ to contact the owner.trim() }, { quoted: m });
    m.react('💎');
  }
  
  return !0;
	    }
