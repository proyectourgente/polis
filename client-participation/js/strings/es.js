// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var s = {};

s.agree = "Acuerdo";
s.disagree = "Desacuerdo";
s.pass = "Paso";

s.modSpam = "Spam";
s.modOffTopic = "Fuera de Contexto";
s.modImportant = "Importante";
s.modSubmitInitialState = "Saltártelo (ninguna de las anteriores), próximo comentario";  //This could sound/be wrong in context
s.modSubmit = "Terminado, próximo comentario";   //Ditto above

s.x_wrote = "escribió:";
s.x_tweeted = "tuiteó:";
s.comments_remaining = "{{num_comments}} restante";
s.comments_remainings = "{{num_comments}} restantes";
s.comments_remaining2 = "{{num_comments}} comentarios restantes";
s.group_123 = "Grupo:";
s.comment_123 = "Comentario:";
s.majorityOpinion = "Opinión de la Mayoría";
s.majorityOpinionShort = "Mayoría";
s.info = "Info";
s.addPolisToYourSite = "<img style='height: 20px; margin: 0px 4px;' src='{{URL}}'/>";
s.privacy = "Privacidad";
s.TOS = "Condiciones de Servicio";
s.writePrompt = "Compartí tu opinión...";
s.anonPerson = "Anónimo";
s.helpWhatAmISeeingTitle = "¿Qué es lo que veo?";
s.helpWhatAmISeeing = "Se agrupa la gente que vota de manera similar. Haz clic en un grupo para ver sus puntos de vista compartidos.";
s.helpWhatDoIDoTitle = " ¿Qué hago?";
s.helpWhatDoIDo = "Haz clic en 'Acordar' o 'Discrepar' para votar en comentarios ajenos. Escribe un comentario (manténgalo a una sola idea). Invita a tus amigos a la discusión!";
s.writeCommentHelpText = "Si su perspectiva no está representada ya, <strong>escribe</strong> un comentario!";
s.helpWriteListIntro = "Qué hace que un comentario sea exitoso?";
s.helpWriteListStandalone = "Idea única";
s.helpWriteListRaisNew = "Plantear nuevas perspectivas, experiencias o problemas";
s.helpWriteListShort = "Claro y conciso (límite - 140 carácteres)";
s.heresHowGroupVoted = "Aquí está como votó el Grupo {{GROUP_NUMBER}}:";
s.one_person = "{{x}} persona";
s.x_people = "{{x}} personas";
s.acrossAllPtpts = "Por todos los participantes:";  //this may sound weird depending on the use context...?
s.xPtptsSawThisComment = " vio este comentario";
s.xOfThoseAgreed = "de esos participantes acordaron";
s.xOfthoseDisagreed = "de esos participantes discreparon";
s.opinionGroups = "Grupos de Opinión";

s.pctAgreed = "{{pct}}% Acordaron";
s.pctDisagreed = "{{pct}}% Discreparon";
s.pctAgreedLong = "{{pct}}% de todos los que votaron acordaron.";
s.pctAgreedOfGroup = "{{pct}}% del Grupo {{group}} Acordaron";
s.pctDisagreedOfGroup = "{{pct}}% del Grupo {{group}} Discreparon";
s.pctDisagreedLong = "{{pct}}% de todos los que votaron discreparon.";
s.pctAgreedOfGroupLong = "{{pct}}% de los del grupo {{group}} que votaron en este comentario acordaron.";
s.pctDisagreedOfGroupLong = "{{pct}}% de los del grupo {{group}} que votaron en este comentario discreparon.";

s.commentSent = "Comentario Enviado! Otros participantes verán tu comentario y acordarán or discreparán con él.";
s.commentSendFailed = "Hubo un error procesando su comentario.";
s.commentSendFailedEmpty = "Hubo un error procesando su comentario - Comentario incompleto.";
s.commentSendFailedTooLong = "Hubo un error procesando su comentario - Comentario es demasiado largo.";
s.commentSendFailedDuplicate = "Hubo un error procesando su comentario. Este comentario ya existe.";
s.commentErrorDuplicate = "!Duplicado! Este comentario ya existe.";
s.commentErrorConversationClosed = "Esta conversación está cerrada. No puede recibir más comentarios.d.";
s.commentIsEmpty = "Comentario incompleto";
s.commentIsTooLong = "Comentario es demasiado largo";
s.hereIsNextStatement = "Voto procesado. Navigue arriba para ver el comentario próximo.";
s.connectFacebook = "Conecta a Facebook";
s.connectTwitter = "Conecta a Twitter";
s.connectToPostPrompt = "Conecta a una identidad para comentar. No publicaremos tu línea de tiempo.";
s.connectToVotePrompt = "Conecta a una identidad para votar. No publicaremos tu línea de tiempo.";
s.tip = "Consejo:";
s.commentWritingTipsHintsHeader = "Cómo escribir un comentario";
s.tipCharLimit = "Comentarios son limitados a {{char_limit}} carácteres.";
s.tipCommentsRandom = "Los comentarios se exponen aleatoriamente. No puedes responder directamente a una persona.";
s.tipOneIdea = "Desagrega los comentarios largos que contienen varias ideas. Así será más fácil que los demás voten en su comentario.";
s.tipNoQuestions = "Los comentarios deben ser declaraciones en vez de preguntas. Los participantes acordarán o discreparán con lo que declares.";
s.commentTooLongByChars = "Excedió el límite de carácters por {{CHARACTERS_COUNT}} carácters.";
s.notSentSinceDemo = "(en realidad no, este es un demo)";
s.submitComment = "Enviar";
s.tipStarred = "Marcado como importante.";
s.participantHelpWelcomeText = "Bienvenido a un nuevo tipo de discusión - <span style='font-weight: 700;'>vota</span> en las opiniones de los demás y <span style='font-weight: 700;'>contribuye</span> opiniones propias.";
s.participantHelpGroupsText = "Cada una de tus respuestas te acerca a algunas personas y te aleja de otras, permitiendo agrupar a la gente que opina de manera similar. <span style='font-weight: 700;'>¿Estás donde pensabas?</span>. Hacé click en un grupo para ver los puntos de vista que comparten sus miembros <a style='font-weight: 700; cursor: pointer; text-decoration: underline' id='helpTextGroupsExpand'>...más</a>";
s.participantHelpGroupsNotYetText = "La visualización aparecerá cuando 7 participantes voten";
s.helpWhatAreGroupsDetail = "<p>Probablemente has visto los 'productos recomendados' en los sitios de compras, o las 'películas recomendadas' de los servicios de streaming. Esos servicios usan algoritmos para agruparte con gente que compra y mira cosas similares y entonces mostrarte cosas compradas o miradas por ellos.</p> <p>Cuando votás en un comentario de este cuestionario pasás a formar parte del grupo de gente que votó de manera similar. Aquí abajo puedes explorar los grupos. Cada grupo se compone de gente con opiniones similares. Hacé click en un grupo para ver cuáles opiniones lo unen y cuáles lo separan de los demás. ¿Estás cerca de la gente que esperabas?</p>";
s.socialConnectPrompt = "Conéctate para ver tus amigos y la gente que sigues en la visualización.";
s.connectFbButton = "Conecta con Facebook";
s.connectTwButton = "Conecta con Twitter";
s.polis_err_reg_fb_verification_email_sent = "Por favor, chequea tu email para el enlace de verificación, y entonces regresa aquí para continuar.";
s.polis_err_reg_fb_verification_noemail_unverified = "Tu cuenta de Facebook no está verificada. Por favor, verifica tu email con Facebook, y entonces regresa aquí para continuar.";
s.showTranslationButton = "Active Traducción";
s.hideTranslationButton = "Deactive el servicio traducción";
s.thirdPartyTranslationDisclaimer = "Traducción proporcionada por un tercero";
s.notificationsAlreadySubscribed = "Está suscrito para recibir actualizaciones a esta conversación.";
s.notificationsGetNotified = "Enterate por correo cuándo agregemos nuevos comentarios.";
s.notificationsEnterEmail = "Ingresá tu dirección de email para recibir notificaciones cuando lleguen más comentarios:";
s.labelEmail = "Email";
s.notificationsSubscribeButton = "Suscribirme";
s.notificationsSubscribeErrorAlert = "Error al suscribirse";
s.noCommentsYet = "Aún no hay comentarios";
s.noCommentsYetSoWrite = "Agregue un comentario para comenzar esta conversación.";
s.noCommentsYetSoInvite = "Comience esta conversación - invite más participantes o agregue un comentario.";
s.noCommentsYouVotedOnAll = "Ya votaste todos los comentarios.";
s.noCommentsTryWritingOne = "Si tiene algo más para decir, escriba un comentario nuevo.";
s.convIsClosed = "Esta conversación está cerrada";
s.noMoreVotingAllowed = "No puede votar más.";
s.topic_good_01 = "Qué deberíamos hacer con el cuarto de ping pong?";
s.topic_good_01_reason = "respuesta libre; cualquier persona puede expresar una opinión a esta pregunta";
s.topic_good_02 = "Qué le parece la propuesta nueva?";
s.topic_good_02_reason = "respuesta libre; cualquier persona puede expresar una opinión a esta pregunta";
s.topic_good_03 = "Hay algo que está limitando productividad?";
s.topic_bad_01 = "everyone report your launch readiness";
s.topic_bad_01_reason = "personas de varios equipos van a votar por las repuestas, pero tal vez no tengan el sabimiento de votar confidentamente.";
s.topic_bad_02 = "what are our launch blockers?";
s.topic_bad_02_reason = "";

module.exports = s;