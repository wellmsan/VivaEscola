const mongoose = require('mongoose');

const CensoSchema = new mongoose.Schema({
    _id: Number,
    NU_ANO_CENSO: {
        type: Number,
        required: true
    },
    CO_ENTIDADE: {
        type: Number,
        ref: 'Escola',
        required: true
    },
    TP_SITUACAO_FUNCIONAMENTO: {
        type: Number,
        required: true
    },
    DT_ANO_LETIVO_INICIO: {
        type: String,
        required: true
    },
    DT_ANO_LETIVO_TERMINO: {
        type: String,
        required: true
    },
    TP_DEPENDENCIA: {
        type: Number,
        required: true
    },
    TP_LOCALIZACAO: {
        type: Number,
        required: true
    },
    TP_CATEGORIA_ESCOLA_PRIVADA: {
        type: String,
        required: true
    },
    IN_CONVENIADA_PP: {
        type: String,
        required: true
    },
    TP_CONVENIO_PODER_PUBLICO: {
        type: String,
        required: true
    },
    IN_MANT_ESCOLA_PRIVADA_EMP: {
        type: String,
        required: true
    },
    IN_MANT_ESCOLA_PRIVADA_ONG: {
        type: String,
        required: true
    },
    IN_MANT_ESCOLA_PRIVADA_SIND: {
        type: String,
        required: true
    },
    IN_MANT_ESCOLA_PRIVADA_SIST_S: {
        type: String,
        required: true
    },
    IN_MANT_ESCOLA_PRIVADA_S_FINS: {
        type: String,
        required: true
    },
    CO_ESCOLA_SEDE_VINCULADA: {
        type: String,
        required: true
    },
    CO_IES_OFERTANTE: {
        type: String,
        required: true
    },
    TP_REGULAMENTACAO: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_PREDIO_ESCOLAR: {
        type: String,
        required: true
    },
    TP_OCUPACAO_PREDIO_ESCOLAR: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_SALAS_EMPRESA: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_SOCIOEDUCATIVO: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_UNID_PRISIONAL: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_PRISIONAL_SOCIO: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_TEMPLO_IGREJA: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_CASA_PROFESSOR: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_GALPAO: {
        type: String,
        required: true
    },
    TP_OCUPACAO_GALPAO: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_SALAS_OUTRA_ESC: {
        type: String,
        required: true
    },
    IN_LOCAL_FUNC_OUTROS: {
        type: String,
        required: true
    },
    IN_PREDIO_COMPARTILHADO: {
        type: String,
        required: true
    },
    IN_AGUA_FILTRADA: {
        type: String,
        required: true
    },
    IN_AGUA_REDE_PUBLICA: {
        type: String,
        required: true
    },
    IN_AGUA_POCO_ARTESIANO: {
        type: String,
        required: true
    },
    IN_AGUA_CACIMBA: {
        type: String,
        required: true
    },
    IN_AGUA_FONTE_RIO: {
        type: String,
        required: true
    },
    IN_AGUA_INEXISTENTE: {
        type: String,
        required: true
    },
    IN_ENERGIA_REDE_PUBLICA: {
        type: String,
        required: true
    },
    IN_ENERGIA_GERADOR: {
        type: String,
        required: true
    },
    IN_ENERGIA_OUTROS: {
        type: String,
        required: true
    },
    IN_ENERGIA_INEXISTENTE: {
        type: String,
        required: true
    },
    IN_ESGOTO_REDE_PUBLICA: {
        type: String,
        required: true
    },
    IN_ESGOTO_FOSSA: {
        type: String,
        required: true
    },
    IN_ESGOTO_INEXISTENTE: {
        type: String,
        required: true
    },
    IN_LIXO_COLETA_PERIODICA: {
        type: String,
        required: true
    },
    IN_LIXO_QUEIMA: {
        type: String,
        required: true
    },
    IN_LIXO_JOGA_OUTRA_AREA: {
        type: String,
        required: true
    },
    IN_LIXO_RECICLA: {
        type: String,
        required: true
    },
    IN_LIXO_ENTERRA: {
        type: String,
        required: true
    },
    IN_LIXO_OUTROS: {
        type: String,
        required: true
    },
    IN_SALA_DIRETORIA: {
        type: String,
        required: true
    },
    IN_SALA_PROFESSOR: {
        type: String,
        required: true
    },
    IN_LABORATORIO_INFORMATICA: {
        type: String,
        required: true
    },
    IN_LABORATORIO_CIENCIAS: {
        type: String,
        required: true
    },
    IN_SALA_ATENDIMENTO_ESPECIAL: {
        type: String,
        required: true
    },
    IN_QUADRA_ESPORTES_COBERTA: {
        type: String,
        required: true
    },
    IN_QUADRA_ESPORTES_DESCOBERTA: {
        type: String,
        required: true
    },
    IN_QUADRA_ESPORTES: {
        type: String,
        required: true
    },
    IN_COZINHA: {
        type: String,
        required: true
    },
    IN_BIBLIOTECA: {
        type: String,
        required: true
    },
    IN_SALA_LEITURA: {
        type: String,
        required: true
    },
    IN_BIBLIOTECA_SALA_LEITURA: {
        type: String,
        required: true
    },
    IN_PARQUE_INFANTIL: {
        type: String,
        required: true
    },
    IN_BERCARIO: {
        type: String,
        required: true
    },
    IN_BANHEIRO_FORA_PREDIO: {
        type: String,
        required: true
    },
    IN_BANHEIRO_DENTRO_PREDIO: {
        type: String,
        required: true
    },
    IN_BANHEIRO_EI: {
        type: String,
        required: true
    },
    IN_BANHEIRO_PNE: {
        type: String,
        required: true
    },
    IN_DEPENDENCIAS_PNE: {
        type: String,
        required: true
    },
    IN_SECRETARIA: {
        type: String,
        required: true
    },
    IN_BANHEIRO_CHUVEIRO: {
        type: String,
        required: true
    },
    IN_REFEITORIO: {
        type: String,
        required: true
    },
    IN_DESPENSA: {
        type: String,
        required: true
    },
    IN_ALMOXARIFADO: {
        type: String,
        required: true
    },
    IN_AUDITORIO: {
        type: String,
        required: true
    },
    IN_PATIO_COBERTO: {
        type: String,
        required: true
    },
    IN_PATIO_DESCOBERTO: {
        type: String,
        required: true
    },
    IN_ALOJAM_ALUNO: {
        type: String,
        required: true
    },
    IN_ALOJAM_PROFESSOR: {
        type: String,
        required: true
    },
    IN_AREA_VERDE: {
        type: String,
        required: true
    },
    IN_LAVANDERIA: {
        type: String,
        required: true
    },
    IN_DEPENDENCIAS_OUTRAS: {
        type: String,
        required: true
    },
    QT_SALAS_EXISTENTES: {
        type: String,
        required: true
    },
    QT_SALAS_UTILIZADAS: {
        type: String,
        required: true
    },
    IN_EQUIP_TV: {
        type: String,
        required: true
    },
    IN_EQUIP_VIDEOCASSETE: {
        type: String,
        required: true
    },
    IN_EQUIP_DVD: {
        type: String,
        required: true
    },
    IN_EQUIP_PARABOLICA: {
        type: String,
        required: true
    },
    IN_EQUIP_COPIADORA: {
        type: String,
        required: true
    },
    IN_EQUIP_RETROPROJETOR: {
        type: String,
        required: true
    },
    IN_EQUIP_IMPRESSORA: {
        type: String,
        required: true
    },
    IN_EQUIP_IMPRESSORA_MULT: {
        type: String,
        required: true
    },
    IN_EQUIP_SOM: {
        type: String,
        required: true
    },
    IN_EQUIP_MULTIMIDIA: {
        type: String,
        required: true
    },
    IN_EQUIP_FAX: {
        type: String,
        required: true
    },
    IN_EQUIP_FOTO: {
        type: String,
        required: true
    },
    IN_COMPUTADOR: {
        type: String,
        required: true
    },
    QT_EQUIP_TV: {
        type: String,
        required: true
    },
    QT_EQUIP_VIDEOCASSETE: {
        type: String,
        required: true
    },
    QT_EQUIP_DVD: {
        type: String,
        required: true
    },
    QT_EQUIP_PARABOLICA: {
        type: String,
        required: true
    },
    QT_EQUIP_COPIADORA: {
        type: String,
        required: true
    },
    QT_EQUIP_RETROPROJETOR: {
        type: String,
        required: true
    },
    QT_EQUIP_IMPRESSORA: {
        type: String,
        required: true
    },
    QT_EQUIP_IMPRESSORA_MULT: {
        type: String,
        required: true
    },
    QT_EQUIP_SOM: {
        type: String,
        required: true
    },
    QT_EQUIP_MULTIMIDIA: {
        type: String,
        required: true
    },
    QT_EQUIP_FAX: {
        type: String,
        required: true
    },
    QT_EQUIP_FOTO: {
        type: String,
        required: true
    },
    QT_COMPUTADOR: {
        type: String,
        required: true
    },
    QT_COMP_ADMINISTRATIVO: {
        type: String,
        required: true
    },
    QT_COMP_ALUNO: {
        type: String,
        required: true
    },
    IN_INTERNET: {
        type: String,
        required: true
    },
    IN_BANDA_LARGA: {
        type: String,
        required: true
    },
    QT_FUNCIONARIOS: {
        type: String,
        required: true
    },
    IN_ALIMENTACAO: {
        type: String,
        required: true
    },
    TP_AEE: {
        type: String,
        required: true
    },
    TP_ATIVIDADE_COMPLEMENTAR: {
        type: String,
        required: true
    },
    IN_FUNDAMENTAL_CICLOS: {
        type: String,
        required: true
    },
    TP_LOCALIZACAO_DIFERENCIADA: {
        type: String,
        required: true
    },
    IN_MATERIAL_ESP_QUILOMBOLA: {
        type: String,
        required: true
    },
    IN_MATERIAL_ESP_INDIGENA: {
        type: String,
        required: true
    },
    IN_MATERIAL_ESP_NAO_UTILIZA: {
        type: String,
        required: true
    },
    IN_EDUCACAO_INDIGENA: {
        type: String,
        required: true
    },
    TP_INDIGENA_LINGUA: {
        type: String,
        required: true
    },
    CO_LINGUA_INDIGENA: {
        type: String,
        required: true
    },
    IN_BRASIL_ALFABETIZADO: {
        type: String,
        required: true
    },
    IN_FINAL_SEMANA: {
        type: String,
        required: true
    },
    IN_FORMACAO_ALTERNANCIA: {
        type: String,
        required: true
    },
    IN_MEDIACAO_PRESENCIAL: {
        type: String,
        required: true
    },
    IN_MEDIACAO_SEMIPRESENCIAL: {
        type: String,
        required: true
    },
    IN_MEDIACAO_EAD: {
        type: String,
        required: true
    },
    IN_ESPECIAL_EXCLUSIVA: {
        type: String,
        required: true
    },
    IN_REGULAR: {
        type: String,
        required: true
    },
    IN_EJA: {
        type: String,
        required: true
    },
    IN_PROFISSIONALIZANTE: {
        type: String,
        required: true
    },
    IN_COMUM_CRECHE: {
        type: String,
        required: true
    },
    IN_COMUM_PRE: {
        type: String,
        required: true
    },
    IN_COMUM_FUND_AI: {
        type: String,
        required: true
    },
    IN_COMUM_FUND_AF: {
        type: String,
        required: true
    },
    IN_COMUM_MEDIO_MEDIO: {
        type: String,
        required: true
    },
    IN_COMUM_MEDIO_INTEGRADO: {
        type: String,
        required: true
    },
    IN_COMUM_MEDIO_NORMAL: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_CRECHE: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_PRE: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_FUND_AI: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_FUND_AF: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_MEDIO_MEDIO: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_MEDIO_INTEGR: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_MEDIO_NORMAL: {
        type: String,
        required: true
    },
    IN_COMUM_EJA_FUND: {
        type: String,
        required: true
    },
    IN_COMUM_EJA_MEDIO: {
        type: String,
        required: true
    },
    IN_COMUM_EJA_PROF: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_EJA_FUND: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_EJA_MEDIO: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_EJA_PROF: {
        type: String,
        required: true
    },
    IN_COMUM_PROF: {
        type: String,
        required: true
    },
    IN_ESP_EXCLUSIVA_PROF: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Censo', CensoSchema, 'censos');
