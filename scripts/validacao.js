// =======================================================Validação do fomulário de solicitação de contato=====================================================
var botao_contato = document.querySelector("#botao_contato");

botao_contato.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form_contato");
    
    var ul = document.querySelector("#mensagens_contato");
    
    var cliente = informacoes_cliente(form);
    
    var contato = {
        motivo: form.motivo.selectedIndex,
        empresa: form.empresa.value,
        mensagem: form.mensagem.value
    };
    
    var erros = validacao (cliente);
    
    if (contato.motivo == 0)
    {
        erros.push("Informe o motivo do contato");
    }
    
    /*if (contato.empresa.length == 0)
    {
        erros.push("O campo empresa não pode ficar em branco");
    }*/
    
    if (contato.mensagem.length == 0)
    {
        erros.push("O campo mensagem não pode ficar em branco");
    }
    
    if (erros.length > 0)
    {
        exibeErros(erros, ul);
        return;
    }
    else
    {
        ul.remove();
    }
    
    form.reset();
    form.submit();
});


// =======================================================Validação do fomulário de Pedido de serviço=====================================================
var botao_pedido = document.querySelector("#botao_pedido");

botao_pedido.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form_pedido");
    
    var ul = document.querySelector("#mensagens_pedido");
    
    var cliente = informacoes_cliente(form);
    
    var pedido = {
        cep: form.cep.value,
        problema: form.mensagem.value,
    };
    
    var erros = validacao (cliente);
    
    if (pedido.cep.length < 8 || pedido.cep.length > 8)
    {
        erros.push("Preencha o campo CEP corretamente");
    }
    
    if (pedido.problema.length == 0)
    {
        erros.push("O campo problema não pode ficar em branco");
    }
    
    if (erros.length > 0)
    {
        exibeErros(erros, ul);
        return;
    }
    else
    {
        ul.remove();
    }
    
    form.reset();
    form.submit();
});


// =======================================================Validação do formulário de acesso==================================================
var botao_acesso = document.querySelector("#botao_acesso");

botao_acesso.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form_acesso");
    
    var ul = document.querySelector("#mensagens_acesso");
    
    var acesso = {
        email: form.email.value,
        senha: form.senha.value,
    };
    
    var erros = [];
    
    if (acesso.email.length < 13)
    {
        erros.push("Informe um e-mail válido");
    }
    
    if (acesso.senha.length < 8)
    {
        erros.push("Informe uma senha válida");
    }
    
    if (erros.length > 0)
    {
        exibeErros(erros, ul);
        return;
    }
    else
    {
        ul.remove();
    }
    
    form.reset();
    form.submit();
});


// =======================================================Validação do formulário de cadastro==================================================================

var botao_cadastro = document.querySelector("#botao_cadastro");

botao_cadastro.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form_cadastro");
    
    var ul = document.querySelector("#mensagens_cadastro");
    
    var cliente = informacoes_cliente(form);
    
    var senha = form.senha.value;
    var confirma_senha = form.confirma_senha.value;
    
    var erros = validacao (cliente);
    
    if (senha.length < 8)
    {
        erros.push("Digite uma senha com no minimo de 8 digitos");
    }
    
    else if(senha != confirma_senha)
    {
        erros.push("As senhas são diferentes");
    }
    
    if (erros.length > 0)
    {
        exibeErros(erros, ul);
        return;
    }
    else
    {
        ul.remove();
    }
    
    form.reset();
    form.submit();
    
});

// =======================================================Funções==============================================================================================
function informacoes_cliente (form)
{
    var cliente = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value
    };
    
    return cliente;
}

function validacao (cliente)
{
    var erros = [];
    
    if (cliente.nome.length == 0)
    {
        erros.push("O campo nome não pode ser vázio");
    }
    
    if (cliente.email.length < 13)
    {
        erros.push("Informe um e-mail valido");
    }
    
    if (cliente.telefone.length > 14 || cliente.telefone.length < 10)
    {
        erros.push("Informe um telefone valido");
    }
    
    return erros;
}

function exibeErros (erros, ul)
{    
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}