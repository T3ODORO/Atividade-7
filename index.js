function validarFormulario() {
    var camposPessoais = ["nomeCompleto", "cpf", "dataNascimento", "endereco", "uf", "cep", "email", "telefone"];
    var camposConsulta = ["especialidade", "dataHora"];

    var erro = false;
    var mensagemErro = "Por favor, preencha os seguintes campos obrigatórios: ";

    for (var i = 0; i < camposPessoais.length; i++) {
      var campo = document.getElementById(camposPessoais[i]);
      if (campo.value.trim() === "") {
        mensagemErro += camposPessoais[i] + ", ";
        erro = true;
      }
    }

    for (var i = 0; i < camposConsulta.length; i++) {
      var campo = document.getElementById(camposConsulta[i]);
      if (campo.value.trim() === "") {
        mensagemErro += camposConsulta[i] + ", ";
        erro = true;
      }
    }

    if (erro) {
      mensagemErro = mensagemErro.slice(0, -2); // Remove a última vírgula e espaço
      document.getElementById("mensagemErro").textContent = mensagemErro;
      return false;
    }

    return true;
  }