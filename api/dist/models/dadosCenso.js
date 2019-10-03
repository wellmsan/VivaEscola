'use strict';

const mongoose = require('mongoose');

const DadosCensoSchema = new mongoose.Schema({
    NU_ANO_CENSO: {
        type: Number,
        required: true
    },
    MUNICIPIO_ID: {
        type: Number,
        required: true
    },
    TP_SITUACAO_FUNCIONAMENTO: {
        type: Number,
        required: true
    },
    QTD_ESC_FEDERAL: {
        type: Number,
        required: true
    },
    QTD_ESC_ESTADUAL: {
        type: Number,
        required: true
    },
    QTD_ESC_MUNICIPAL: {
        type: Number,
        required: true
        /*
        QTD_ESC_PRIVADA: {
            type: Number,
            required: true
        },
        IN_MANT_ESCOLA_PRIVADA_EMP: {
            type: Number,
            required: true
        },
        IN_MANT_ESCOLA_PRIVADA_ONG: {
            type: Number,
            required: true
        },
        IN_MANT_ESCOLA_PRIVADA_SIND: {
            type: Number,
            required: true
        },
        IN_MANT_ESCOLA_PRIVADA_SIST_S: {
            type: Number,
            required: true
        },
        IN_MANT_ESCOLA_PRIVADA_S_FINS: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_PREDIO_ESCOLAR: {
            type: Number,
            required: true
        },
        TP_OCUPACAO_PREDIO_ESCOLAR: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_SALAS_EMPRESA: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_SOCIOEDUCATIVO: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_UNID_PRISIONAL: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_PRISIONAL_SOCIO: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_TEMPLO_IGREJA: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_CASA_PROFESSOR: {
            type: Number,
            required: true
        },
        TP_OCUPACAO_GALPAO: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_SALAS_OUTRA_ESC: {
            type: Number,
            required: true
        },
        IN_LOCAL_FUNC_OUTROS: {
            type: Number,
            required: true
        },
         IN_PREDIO_COMPARTILHADO: {
            type: Number,
            required: true
        },
        IN_AGUA_FILTRADA: {
            type: Number,
            required: true
        },
        IN_AGUA_REDE_PUBLICA: {
            type: Number,
            required: true
        },
        IN_AGUA_POCO_ARTESIANO: {
            type: Number,
            required: true
        },
        IN_AGUA_CACIMBA: {
            type: Number,
            required: true
        },
        IN_AGUA_FONTE_RIO: {
            type: Number,
            required: true
        },
        IN_AGUA_INEXISTENTE: {
            type: Number,
            required: true
        },
        IN_ENERGIA_REDE_PUBLICA: {
            type: Number,
            required: true
        },
        IN_ENERGIA_GERADOR: {
            type: Number,
            required: true
        },
        IN_ENERGIA_OUTROS: {
            type: Number,
            required: true
        },
        IN_ENERGIA_INEXISTENTE: {
            type: Number,
            required: true
        },
        IN_ESGOTO_REDE_PUBLICA: {
            type: Number,
            required: true
        },
        IN_ESGOTO_FOSSA: {
            type: Number,
            required: true
        },
        IN_ESGOTO_INEXISTENTE: {
            type: Number,
            required: true
        },
        IN_LIXO_COLETA_PERIODICA: {
            type: Number,
            required: true
        },
        IN_LIXO_QUEIMA: {
            type: Number,
            required: true
        },
        IN_LIXO_JOGA_OUTRA_AREA: {
            type: Number,
            required: true
        },
        IN_LIXO_RECICLA: {
            type: Number,
            required: true
        },
        IN_LIXO_ENTERRA: {
            type: Number,
            required: true
        },
        IN_LIXO_OUTROS: {
            type: Number,
            required: true
        },
        IN_SALA_DIRETORIA: {
            type: Number,
            required: true
        },
        IN_SALA_PROFESSOR: {
            type: Number,
            required: true
        },
        IN_LABORATORIO_INFORMATICA: {
            type: Number,
            required: true
        },
        IN_LABORATORIO_CIENCIAS: {
            type: Number,
            required: true
        },
        IN_SALA_ATENDIMENTO_ESPECIAL: {
            type: Number,
            required: true
        },
        IN_QUADRA_ESPORTES_COBERTA: {
            type: Number,
            required: true
        },
        IN_QUADRA_ESPORTES_DESCOBERTA: {
            type: Number,
            required: true
        },
        IN_QUADRA_ESPORTES: {
            type: Number,
            required: true
        },
        IN_COZINHA: {
            type: Number,
            required: true
        },
        IN_BIBLIOTECA: {
            type: Number,
            required: true
        },
        IN_SALA_LEITURA: {
            type: Number,
            required: true
        },
        IN_BIBLIOTECA_SALA_LEITURA: {
            type: Number,
            required: true
        },
        IN_PARQUE_INFANTIL: {
            type: Number,
            required: true
        },
        IN_BERCARIO: {
            type: Number,
            required: true
        },
        IN_BANHEIRO_FORA_PREDIO: {
            type: Number,
            required: true
        },
        IN_BANHEIRO_DENTRO_PREDIO: {
            type: Number,
            required: true
        },
        IN_BANHEIRO_EI: {
            type: Number,
            required: true
        },
        IN_BANHEIRO_PNE: {
            type: Number,
            required: true
        },
        IN_DEPENDENCIAS_PNE: {
            type: Number,
            required: true
        },
        IN_SECRETARIA: {
            type: Number,
            required: true
        },
        IN_BANHEIRO_CHUVEIRO: {
            type: Number,
            required: true
        },
        IN_REFEITORIO: {
            type: Number,
            required: true
        },
        IN_DESPENSA: {
            type: Number,
            required: true
        },
        IN_ALMOXARIFADO: {
            type: Number,
            required: true
        },
        IN_AUDITORIO: {
            type: Number,
            required: true
        },
        IN_PATIO_COBERTO: {
            type: Number,
            required: true
        },
        IN_PATIO_DESCOBERTO: {
            type: Number,
            required: true
        },
        IN_ALOJAM_ALUNO: {
            type: Number,
            required: true
        },
        IN_ALOJAM_PROFESSOR: {
            type: Number,
            required: true
        },
        IN_AREA_VERDE: {
            type: Number,
            required: true
        },
        IN_LAVANDERIA: {
            type: Number,
            required: true
        },
        IN_DEPENDENCIAS_OUTRAS: {
            type: Number,
            required: true
        },
        QT_SALAS_EXISTENTES: {
            type: Number,
            required: true
        },
        QT_SALAS_UTILIZADAS: {
            type: Number,
            required: true
        },
        IN_EQUIP_TV: {
            type: Number,
            required: true
        },
        IN_EQUIP_VIDEOCASSETE: {
            type: Number,
            required: true
        },
        IN_EQUIP_DVD: {
            type: Number,
            required: true
        },
        IN_EQUIP_PARABOLICA: {
            type: Number,
            required: true
        },
        IN_EQUIP_COPIADORA: {
            type: Number,
            required: true
        },
        IN_EQUIP_RETROPROJETOR: {
            type: Number,
            required: true
        },
        IN_EQUIP_IMPRESSORA: {
            type: Number,
            required: true
        },
        IN_EQUIP_IMPRESSORA_MULT: {
            type: Number,
            required: true
        },
        IN_EQUIP_SOM: {
            type: Number,
            required: true
        },
        IN_EQUIP_MULTIMIDIA: {
            type: Number,
            required: true
        },
        IN_EQUIP_FAX: {
            type: Number,
            required: true
        },
        IN_EQUIP_FOTO: {
            type: Number,
            required: true
        },
        IN_COMPUTADOR: {
            type: Number,
            required: true
        },
        QT_EQUIP_TV: {
            type: Number,
            required: true
        },
        QT_EQUIP_VIDEOCASSETE: {
            type: Number,
            required: true
        },
        QT_EQUIP_DVD: {
            type: Number,
            required: true
        },
        QT_EQUIP_PARABOLICA: {
            type: Number,
            required: true
        },
        QT_EQUIP_COPIADORA: {
            type: Number,
            required: true
        },
        QT_EQUIP_RETROPROJETOR: {
            type: Number,
            required: true
        },
        QT_EQUIP_IMPRESSORA: {
            type: Number,
            required: true
        },
        QT_EQUIP_IMPRESSORA_MULT: {
            type: Number,
            required: true
        },
        QT_EQUIP_SOM: {
            type: Number,
            required: true
        },
        QT_EQUIP_MULTIMIDIA: {
            type: Number,
            required: true
        },
        QT_EQUIP_FAX: {
            type: Number,
            required: true
        },
        QT_EQUIP_FOTO: {
            type: Number,
            required: true
        },
        QT_COMPUTADOR: {
            type: Number,
            required: true
        },
        QT_COMP_ADMINISTRATIVO: {
            type: Number,
            required: true
        },
        QT_COMP_ALUNO: {
            type: Number,
            required: true
        },
        IN_INTERNET: {
            type: Number,
            required: true
        },
        IN_BANDA_LARGA: {
            type: Number,
            required: true
        },
        QT_FUNCIONARIOS: {
            type: Number,
            required: true
        },
        IN_ALIMENTACAO: {
            type: Number,
            required: true
        },
        IN_FUNDAMENTAL_CICLOS: {
            type: Number,
            required: true
        },
        IN_MATERIAL_ESP_QUILOMBOLA: {
            type: Number,
            required: true
        },
        IN_MATERIAL_ESP_INDIGENA: {
            type: Number,
            required: true
        },
        IN_MATERIAL_ESP_NAO_UTILIZA: {
            type: Number,
            required: true
        },
        IN_EDUCACAO_INDIGENA: {
            type: Number,
            required: true
        },
        CO_LINGUA_INDIGENA: {
            type: Number,
            required: true
        },
        IN_BRASIL_ALFABETIZADO: {
            type: Number,
            required: true
        },
        IN_FINAL_SEMANA: {
            type: Number,
            required: true
        },
        IN_FORMACAO_ALTERNANCIA: {
            type: Number,
            required: true
        },
        IN_MEDIACAO_PRESENCIAL: {
            type: Number,
            required: true
        },
        IN_MEDIACAO_SEMIPRESENCIAL: {
            type: Number,
            required: true
        },
        IN_MEDIACAO_EAD: {
            type: Number,
            required: true
        },
        IN_ESPECIAL_EXCLUSIVA: {
            type: Number,
            required: true
        },
        IN_REGULAR: {
            type: Number,
            required: true
        },
        IN_EJA: {
            type: Number,
            required: true
        },
        IN_PROFISSIONALIZANTE: {
            type: Number,
            required: true
        },
        IN_COMUM_CRECHE: {
            type: Number,
            required: true
        },
        IN_COMUM_PRE: {
            type: Number,
            required: true
        },
        IN_COMUM_FUND_AI: {
            type: Number,
            required: true
        },
        IN_COMUM_FUND_AF: {
            type: Number,
            required: true
        },
        IN_COMUM_MEDIO_MEDIO: {
            type: Number,
            required: true
        },
        IN_COMUM_MEDIO_INTEGRADO: {
            type: Number,
            required: true
        },
        IN_COMUM_MEDIO_NORMAL: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_CRECHE: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_PRE: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_FUND_AI: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_FUND_AF: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_MEDIO_MEDIO: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_MEDIO_INTEGR: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_MEDIO_NORMAL: {
            type: Number,
            required: true
        },
        IN_COMUM_EJA_FUND: {
            type: Number,
            required: true
        },
        IN_COMUM_EJA_MEDIO: {
            type: Number,
            required: true
        },
        IN_COMUM_EJA_PROF: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_EJA_FUND: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_EJA_MEDIO: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_EJA_PROF: {
            type: Number,
            required: true
        },
        IN_COMUM_PROF: {
            type: Number,
            required: true
        },
        IN_ESP_EXCLUSIVA_PROF: {
            type: Number,
            required: true
        }
        */
    } });

module.exports = mongoose.model('DadosCenso', DadosCensoSchema, 'dados_censo');
//# sourceMappingURL=dadosCenso.js.map