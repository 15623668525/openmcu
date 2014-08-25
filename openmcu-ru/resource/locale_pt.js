window.l_welcome = 'OpenMCU-ru';
window.l_status = '<Estado';

window.l_connections = 'Conex�es';
window.l_connections_OFFLINE_PREFIX    = "<B>[Offline] </B>"   ;
window.l_connections_OFFLINE_SUFFIX    = ""                    ;
window.l_connections_HIDDEN_PREFIX     = "<B>[Oculto] </B>"    ;
window.l_connections_HIDDEN_SUFFIX     = ""                    ;
window.l_connections_AUDIO_OUT_STR     = "Audio Out"           ;
window.l_connections_AUDIO_IN_STR      = "Audio In"            ;
window.l_connections_VIDEO_OUT_STR     = "Video Out"           ;
window.l_connections_VIDEO_IN_STR      = "Video In"            ;
window.l_connections_AI_NEG_ERR        = "Sem entrada de �udio";
window.l_connections_AO_NEG_ERR        = "Sem sa�da de �udio"  ;
window.l_connections_VI_NEG_ERR        = "Sem entrada de v�deo";
window.l_connections_VO_NEG_ERR        = "Sem sa�da de v�deo"  ;
window.l_connections_BUTTON_TEXT       = "Pegue em Texto"      ;
window.l_connections_BUTTON_FORUM      = "Pegue em BBCode"     ;
window.l_connections_BUTTON_HTML       = "Pegue em HTML"       ;
window.l_connections_BUTTON_CLOSE      = "Feche code"          ;
window.l_connections_CODE_TOOLTIP      = "Copiar, prima Ctrl+C";
window.l_connections_DAYS_STR          = "dia(s)"              ;
window.l_connections_COL_NAME          = "Nome"                ;
window.l_connections_COL_DURATION      = "Dura��o"             ;
window.l_connections_COL_RTP           = "RTP Canal: Codec"    ;
window.l_connections_COL_PACKETS       = "Pacotes"             ;
window.l_connections_COL_BYTES         = "Bytes"               ;
window.l_connections_COL_KBPS          = "Kbit/s"              ;
window.l_connections_COL_FPS           = "FPS"                 ;
window.l_connections_word_room         = "Sala"                ;
window.l_connections_COL_LOSTPCN       = "60s perdas"          ;

window.l_records = 'Grava��es';
window.l_control = 'Controle';
window.l_rooms = 'Salas';
window.l_invite = 'Convida';
window.l_invite_s = 'Convite bem sucedido';
window.l_invite_f = 'Convite falhou';
window.l_settings = 'Configura��o';
window.l_param_general = 'Geral';
window.l_param_registrar = 'Registrar';
window.l_param_conference = 'Confer�ncia';
window.l_param_managing_users = 'Utilzadores';
window.l_param_managing_groups = 'Grupos';
window.l_param_control_codes = 'C�digo de Controle';
window.l_param_room_codes = 'C�digo de Sala';
window.l_param_h323_endpoints = 'Terminais H.323';
window.l_param_sip_endpoints = 'Terminais SIP';
window.l_param_rtsp = 'Par�metros RTSP';
window.l_param_rtsp_servers = 'Servidores RTSP';
window.l_param_rtsp_endpoints = 'Terminais RTSP';
window.l_param_video = 'V�deo';
window.l_param_record = 'Gravar';
window.l_param_h323 = 'Par�metros H323';
window.l_param_sip = 'Par�metros SIP';
window.l_param_sip_proxy = 'Informa��o de Conta';
window.l_param_access_rules = 'Regras de Acesso';
window.l_param_receive_sound = 'Codecs de �udio (recep��o)';
window.l_param_transmit_sound = 'Codecs de �udio (transmiss�o)';
window.l_param_receive_video = 'Codecs de v�deo (recep��o)';
window.l_param_transmit_video = 'Codecs de v�deo (transmiss�o)';
window.l_param_sip_sound = 'Codecs �udio';
window.l_param_sip_video = 'Codecs v�deo';
window.l_help = 'Ajuda';
window.l_forum = 'Forum';
window.l_manual = 'Manual';
window.l_support = 'Suporte';

window.l_info_welcome ='\
<p>\
O servi�o OpenMCU-ru est� a funcionar e a aceitar conex�es.\
</p>\
<p>\
Confer�ncia iniciada a partir de algum terminal ir� funcionar no modo n�o controlado. Todos os participantes ir�o receber a mesma imagem. No modo n�o controlado, OpenMCU-ru trrocar� o layout automaticamente a depender do n�mero de participantes na confer�ncia na ordem determinada no ficheiro "layouts.conf". Depois de atingir 100 participantes os pr�ximos n�o ser�o vistos mas ver�o os outros.<br />\
O  �udio est� em modo n�o controlado, recebendo e transmitindo para todos os participantes.<br />\
</p>\
<p>\
Para testar o servidor fa�a uma chamada para a sala "echo" ou para a sala "testroomN" onde N � um n�mero de 1 � 100.<br />\
</p>\
<p>\
A gest�o do servidor � feita a partir do menu principal no topo da p�gina.<br />\
A p�gina <b>Estado</b> mostra as conex�es existentes e os par�metros dos terminais.<br />\
Na p�gina <b>Controle</b> as salas podem ser controladas.<br />\
Na p�ginas <b>Configura��es</b> pode ser feita a configura��o global de par�metros do servidor.<br />\
Mais informa��o pode ser obtida em <b>Ajuda</b> (link para o site oficial na Internet).<br />\
</p>\
<p>Segue abaixo um sum�rio sobre o servidor.</p>\
';
window.l_welcome_logo ='\
<p>\
<b>Imagem do seu logotipo personalisado</b>\
</p>\
<p>\
Esta imagem ser� mostrada quando n�o houver recep��o de v�deo. Aceita somente JPEG com um m�ximo de 500KB.\
</p>\
';

window.l_info_invite ='';
window.l_info_invite_f ='';
window.l_info_invite_s ='';
window.l_info_rooms ='Para ver uma sala e gerir a mesma clique no nome da sala.';

window.l_info_control ='\
<div id=\'tip\' name=\'tip\'\
  onclick=\'if(typeof savedhelpcontent=="undefined"){savedhelpcontent=this.innerHTML;this.innerHTML="Esta p�gina � utilizada para gerir sua confer�ncia. Voc� pode escolher os participantes a partir da lista e coloc�-lo no local da tela que lhe convier utilizando o controle de layout (drag-and-drop ou drop-down). Cada posi��o pode ser designada a um participante directamente (est�tica) ou pode ser activada por voz.<br>A posi��o Voice-activated pode ser marcada como VAD ou VAD2 (os participantes mais activos ser�o movidos de VAD para VAD2 automaticamente).";}else {this.innerHTML=savedhelpcontent; try {delete savedhelpcontent;} catch(e){savedhelpcontent=undefined;};}\'\
>This page is used to\
 <span style=\'cursor:pointer;font-weight:bold;color:#095\'> ...</span>\
</div>';

window.l_info_records ='\
P�gina permite mostrar as v�deo-grava��es na directoria, \
Page shows video records directory (on the server), \
do servidor e baixar as mesmas.';

window.l_info_connections ='\
P�gina mostra as conex�es existentes e par�mteros dos terminais.\
';
window.l_info_param_general ='Par�metros globais do servidor. Para restaurar configura��o por defeito - Marque "RESTORE DEFAULTS" na checkbox and clique Aceita.';
window.l_info_param_registrar = '';
window.l_info_param_conference ='';
window.l_info_param_managing_users = '';
window.l_info_param_managing_groups = '';
window.l_info_param_control_codes = '';
window.l_info_param_room_codes = '';
window.l_info_param_video ='Qualidade do v�deo de sa�da.';
window.l_info_param_record ='Qualidade de grava��o.';
window.l_info_param_h323 ='';
window.l_info_param_sip ='';
window.l_info_param_access_rules ='';
window.l_info_param_sip_proxy ='';
window.l_info_param_receive_sound = '';
window.l_info_param_transmit_sound = '';
window.l_info_param_receive_video = '';
window.l_info_param_transmit_video = '';

window.l_select_create =       'Cria sala'
window.l_select_enter =        'Entre sala'
window.l_select_record =       'Grave'
window.l_select_moderated =    'Modere'
window.l_select_moderated_yes ='Sim'
window.l_select_moderated_no = 'N�o'
window.l_select_visible =      'Membros Vis�veis'
window.l_select_unvisible =    'Membros invis�veis'
window.l_select_duration =     'Dura��o'
window.l_select_delete =       'Remove sala'

window.l_not_found = 'n�o encontrado';

window.l_name_accept         = 'Aceita';
window.l_name_reset          = 'Reset';
window.l_name_user           = 'Utilizador';
window.l_name_host           = 'Host';
window.l_name_group          = 'Grupo';
window.l_name_password       = 'Senha';
window.l_name_roomname       = 'Nome da sala';
window.l_name_access         = 'Acesso';
window.l_name_action         = 'A��o';
window.l_name_code           = 'C�digo';
window.l_name_message        = 'Mensagem';
window.l_name_address        = 'Endere�o';
window.l_name_address_book   = 'Livro de endere�o';
window.l_name_save           = 'Salva';
window.l_name_cancel         = 'Cancela';
window.l_name_advanced       = 'Avan�ado';
window.l_name_auto_create              = 'Auto cria��o';
window.l_name_force_split_video        = 'Moderado';
window.l_name_auto_delete_empty        = 'Auto elimina��o';
window.l_name_auto_record_not_empty    = 'Auto grava��o';
window.l_name_recall_last_template     = 'Recarrega �ltimo modelo';
window.l_name_time_limit               = 'Limite de tempo';

window.l_name_display_name                         = 'Sobrep�e nome mostrado';
window.l_name_frame_rate_from_mcu                  = 'Frame rate da MCU';
window.l_name_bandwidth_from_mcu                   = 'Banda da MCU, Kbit/s';
window.l_name_bandwidth_to_mcu                     = 'Banda para MCU, Kbit/s';
window.l_name_transport                            = 'Transporte';
window.l_name_port                                 = 'porta';

window.l_name_registrar                            = 'Registrar';
window.l_name_account                              = 'Conta';
window.l_name_register                             = 'Registera';
window.l_name_address_sip_proxy                    = 'Endere�o do SIP-proxy';
window.l_name_expires                              = 'Expira em';
window.l_name_path                                 = 'Caminho';
window.l_name_enable                               = 'Habilita';

window.l_name_registered                           = 'Registrado';
window.l_name_connected                            = 'Conectado';
window.l_name_last_ping_response                   = '�ltima resposta';

window.l_name_codec                                = 'Codec';
window.l_name_audio                                = '�udio';
window.l_name_video                                = 'V�deo';
window.l_name_audio_receive                        = '�udio (recebe)';
window.l_name_audio_transmit                       = '�udio (transmite)';
window.l_name_video_receive                        = 'V�deo (recebe)';
window.l_name_video_transmit                       = 'V�deo (transmite)';
window.l_name_audio_codec                          = 'Codec de �udio';
window.l_name_video_codec                          = 'Codec de v�deo';
window.l_name_audio_codec_receive                  = 'Codec de �udio (recebe)';
window.l_name_video_codec_receive                  = 'Codec de v�deo (recebe)';
window.l_name_audio_codec_transmit                 = 'Codec de �udio (transmite)';
window.l_name_video_codec_transmit                 = 'Codec de v�deo (transmite)';
window.l_name_video_resolution                     = 'Resolu��o de v�deo';

window.l_name_parameters_for_sending               = "Par�metros para envio";
window.l_name_codec_parameters                     = "Par�metros de Codec<br>(sobrep�e o recebido)";
window.l_name_default_parameters                   = "Par�metros por defeito";

window.l_room_invite_all_inactive_members          = 'Convida TODOS os membros inactivos?';
window.l_room_drop_all_active_members              = 'Desliga TODAS conex�es activas?';
window.l_room_remove_all_inactive_members          = 'Remove TODOS membros inactivos da lista?';
window.l_room_drop_connection_with                 = 'Desliga conex�es com';
window.l_room_remove_from_list                     = 'Remove da lista';

window.l_room_deletion_text = ["",                   "Closing room &laquo;%&raquo;: a desconectar participantes",
                                                     "Closing room &laquo;%&raquo;: aguardando participante sair da sala",
                                                     "Closing room &laquo;%&raquo;: desconectando membros escondidos de sistema",
                                                     "Closing room &laquo;%&raquo;: aguardando sa�da de membros da sala",
                                                     "Room &laquo;%&raquo; ELIMINADO"
];
