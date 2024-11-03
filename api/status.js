let statusAtual = "Recebimento da Máquina"; // Status inicial

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Atualiza o status
    const { etapa } = req.body;
    statusAtual = etapa;
    res.status(200).send("Status atualizado");
  } else if (req.method === 'GET') {
    // Retorna o status atual
    res.json({ etapa: statusAtual });
  } else {
    res.status(405).send("Método não permitido");
  }
}
