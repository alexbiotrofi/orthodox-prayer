// Orthodox prayer content organized by time of day and duration

export interface Prayer {
  title: string;
  type: 'prayer' | 'psalm' | 'scripture' | 'troparion' | 'kontakion';
  text: string;
  duration: number; // estimated minutes to read
  rubric?: string; // liturgical instruction
}

export interface PrayerRule {
  opening: Prayer[];
  body: Prayer[];
  closing: Prayer[];
}

// ─── Opening Prayers (always included) ───

const trisagionPrayers: Prayer[] = [
  {
    title: 'Opening',
    type: 'prayer',
    duration: 0.5,
    rubric: 'Make the sign of the Cross and say:',
    text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
  },
  {
    title: 'Initial Prayer',
    type: 'prayer',
    duration: 0.5,
    text: 'Glory to Thee, our God, glory to Thee.\n\nO Heavenly King, Comforter, the Spirit of Truth, Who art everywhere present and fillest all things, Treasury of blessings and Giver of life: come and abide in us, and cleanse us from every impurity, and save our souls, O Good One.',
  },
  {
    title: 'Trisagion',
    type: 'prayer',
    duration: 1,
    rubric: 'Say three times:',
    text: 'Holy God, Holy Mighty, Holy Immortal, have mercy on us.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.\n\nO Most Holy Trinity, have mercy on us. Lord, cleanse us from our sins. Master, pardon our transgressions. Holy One, visit and heal our infirmities, for Thy name\'s sake.\n\nLord, have mercy. Lord, have mercy. Lord, have mercy.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.',
  },
  {
    title: 'The Lord\'s Prayer',
    type: 'prayer',
    duration: 0.5,
    text: 'Our Father, Who art in heaven, hallowed be Thy name. Thy Kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.\n\nFor Thine is the kingdom, and the power, and the glory, of the Father, and of the Son, and of the Holy Spirit, now and ever and unto ages of ages. Amen.',
  },
];

// ─── Closing Prayers ───

const closingPrayers: Prayer[] = [
  {
    title: 'Dismissal Prayer',
    type: 'prayer',
    duration: 0.5,
    text: 'Lord, have mercy. Lord, have mercy. Lord, have mercy.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.\n\nMore honorable than the Cherubim, and more glorious beyond compare than the Seraphim, without defilement thou gavest birth to God the Word: true Theotokos, we magnify thee.\n\nThrough the prayers of our Holy Fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.',
  },
];

// ─── Morning Prayers ───

const morningPrayers: Prayer[] = [
  {
    title: 'Morning Prayer to the Holy Trinity',
    type: 'prayer',
    duration: 1.5,
    text: 'Having risen from sleep, I fall down before Thee, O Blessed One, and sing to Thee, O Mighty One, the Angelic Hymn: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.\n\nGlory to the Father, and to the Son, and to the Holy Spirit.\n\nFrom my bed and from sleep Thou hast raised me, O Lord. Enlighten my mind and my heart, and open my lips that I may praise Thee, O Holy Trinity: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.\n\nBoth now and ever and unto ages of ages. Amen.\n\nSuddenly the Judge shall come, and the deeds of each shall be revealed. But with fear we cry out in the middle of the night: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.',
  },
  {
    title: 'Prayer of St. Macarius the Great',
    type: 'prayer',
    duration: 2,
    text: 'O God, cleanse me, a sinner, for I have never done anything good in Thy sight; but deliver me from the Evil One, and let Thy will be in me, that I may open my unworthy mouth without condemnation, and praise Thy Holy Name, of the Father, and of the Son, and of the Holy Spirit, now and ever and unto ages of ages. Amen.',
  },
  {
    title: 'Morning Prayer of Dedication',
    type: 'prayer',
    duration: 1.5,
    text: 'O Lord, grant me to greet the coming day in peace. Help me in all things to rely upon Thy holy will. In every hour of the day reveal Thy will to me. Bless my dealings with all who surround me. Teach me to treat all that comes to me throughout the day with peace of soul, and with firm conviction that Thy will governs all.\n\nIn all my deeds and words guide my thoughts and feelings. In unforeseen events let me not forget that all are sent by Thee. Teach me to act firmly and wisely, without embittering and embarrassing others. Give me strength to bear the fatigue of the coming day with all that it shall bring.\n\nDirect my will, teach me to pray, pray Thou Thyself in me. Amen.',
  },
  {
    title: 'Prayer to the Theotokos',
    type: 'prayer',
    duration: 1,
    text: 'O Most Holy Lady Theotokos, through thy holy and all-powerful prayers, dispel from me, thy humble and wretched servant, despondency, forgetfulness, folly, carelessness, and all impure, evil, and blasphemous thoughts from my wretched heart and darkened mind.\n\nAnd quench the flame of my passions, for I am poor and wretched. And deliver me from my many cruel memories and enterprises, and free me from all their evil effects. For blessed art thou by all generations, and glorified is thy most honorable name unto ages of ages. Amen.',
  },
  {
    title: 'Prayer to the Guardian Angel',
    type: 'prayer',
    duration: 1.5,
    text: 'O Holy Angel, attending my wretched soul and my passionate life, forsake me not, a sinner, neither depart from me because of my intemperance. Give no place to the evil demon to subdue me through the oppression of this mortal body; but take me by my wretched and outstretched hand, and lead me to the path of salvation.\n\nO holy Angel of God, the guardian and protector of my wretched soul and body, forgive me all things whereby I have grieved thee all the days of my life; and if I have sinned in anything during the past night, shelter me in the present day, and preserve me from every temptation of the enemy, that I may not anger God by any sin; and pray to the Lord for me, that He may establish me in His fear, and make me a worthy servant of His goodness. Amen.',
  },
];

// ─── Midday Prayers ───

const middayPrayers: Prayer[] = [
  {
    title: 'Midday Prayer',
    type: 'prayer',
    duration: 1,
    text: 'O Christ God, Who at all times and at every hour, both in heaven and on earth, art worshipped and glorified; Who art long-suffering, merciful, and compassionate; Who lovest the just and showest mercy upon the sinner; Who callest all to salvation through the promise of blessings to come:\n\nO Lord, in this hour receive our supplications, and direct our lives according to Thy commandments. Sanctify our souls, hallow our bodies, correct our thoughts, cleanse our minds; deliver us from all tribulation, evil, and distress. Encompass us with Thy holy Angels, that guided and guarded by them, we may attain to the unity of the faith and to the knowledge of Thine unapproachable glory, for Thou art blessed unto ages of ages. Amen.',
  },
  {
    title: 'Prayer of St. Ephraim the Syrian',
    type: 'prayer',
    duration: 1,
    rubric: 'With prostrations during Great Lent:',
    text: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk.\n\nBut give rather the spirit of chastity, humility, patience, and love to Thy servant.\n\nYea, O Lord and King, grant me to see my own transgressions, and not to judge my brother, for blessed art Thou, unto ages of ages. Amen.',
  },
  {
    title: 'Prayer at the Sixth Hour',
    type: 'prayer',
    duration: 1.5,
    text: 'O Thou Who on the sixth day and at the sixth hour didst nail to the Cross the sin which rebellious Adam had committed in Paradise: tear asunder also the handwriting of our sins, O Christ our God, and save us. Amen.\n\nO Master, Lord Jesus Christ our God, who art patient with our offenses and hast brought us even to this present hour, in which, hanging upon the life-giving Tree, Thou didst make a way into Paradise for the wise thief, and by death didst destroy death: cleanse us sinners and Thine unworthy servants. For we have sinned and committed iniquity, and are not worthy to lift up our eyes and look upon the height of heaven, because we have forsaken the path of Thy righteousness and have walked in the desires of our own hearts. But we implore Thine unbounded goodness: spare us, O Lord, according to the multitude of Thy mercy, and save us for Thy Holy Name\'s sake, for our days have vanished in vanity. Rescue us from the hand of the adversary, and forgive us our sins, and slay our carnal desires; that, putting off the old man, we may put on the new, and live for Thee, our Master and Benefactor; and that thus, following Thine ordinances, we may attain to eternal rest, where is the abode of all those that rejoice. Amen.',
  },
];

// ─── Evening Prayers ───

const eveningPrayers: Prayer[] = [
  {
    title: 'Evening Prayer of Thanksgiving',
    type: 'prayer',
    duration: 1.5,
    text: 'Almighty God, Lord of heaven and earth, and of all creation visible and invisible, in Thine ineffable goodness, look down upon us, Thy people gathered in Thy Holy Name. Be our Helper and Defender in this day and through the coming night. Preserve us from every hostile enemy, from all vain striving of this world, and from the snares of the devil.\n\nGrant that this evening and the approaching night may be peaceful; clothe us with the armor of light. Deliver us from the fear of night and from every evil that walks in darkness. And grant that the sleep which Thou hast appointed for the repose of our frailty may be free from every fantasy of the devil.\n\nYea, O Master of all things and Giver of all good, may we, being moved to compunction upon our beds, remember Thy Name in the night, and, enlightened by meditation upon Thy commandments, rise up in joyfulness of soul to glorify Thy goodness, offering up prayers and supplications to Thy compassion for all our sins, which we have committed in thought, word, and deed. And by Thy mercy, guide us to that calm and quiet haven where is the everlasting rest of Thy blessed ones. For Thou art a good God and the Lover of mankind, and to Thee we ascribe glory: to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.',
  },
  {
    title: 'Evening Prayer of St. John Chrysostom',
    type: 'prayer',
    duration: 1,
    text: 'O Lord, deprive me not of Thy heavenly blessings. O Lord, deliver me from eternal torment. O Lord, if I have sinned in my mind or my thought, in word or in deed, forgive me. O Lord, deliver me from every ignorance and inattention, from a petty soul and a stony hard heart.\n\nO Lord, deliver me from every temptation. O Lord, lighten my heart that has been darkened by evil desires. O Lord, I being human have sinned; but Thou being God, forgive me in Thy loving-kindness, for Thou knowest the weakness of my soul. O Lord, send Thy grace to my help, that I may glorify Thy Holy Name.\n\nO Lord Jesus Christ, enroll me, Thy servant, in the Book of Life, and grant me a blessed end. O Lord my God, even though I have done nothing good in Thy sight, grant me, by Thy grace, to make a good beginning. O Lord, sprinkle into my heart the dew of Thy grace. O Lord of heaven and earth, remember me, Thy sinful servant, full of shame and impurity, in Thy Kingdom. Amen.',
  },
  {
    title: 'Prayer Before Sleep',
    type: 'prayer',
    duration: 1.5,
    text: 'Into Thy hands, O Lord Jesus Christ, my God, I commit my spirit. Bless me, save me, and grant me eternal life. Amen.\n\nO Lord our God, in Whom we believe, and Whose Name we invoke above every name, grant us, as we go to sleep, relaxation of soul and body, and keep us from all dreams and dark pleasures. Stop the rushing of passions and quench the burning that arises in the flesh. Grant us to live chastely in deed and in word, that we may obtain a virtuous life, and not fall away from Thy promised blessings; for Thou art blessed forever. Amen.',
  },
  {
    title: 'Prayer to the Theotokos Before Sleep',
    type: 'prayer',
    duration: 0.5,
    text: 'Beneath thy tenderness of heart do we take refuge, O Theotokos. Despise not our petitions in our necessity, but deliver us from harm, O only pure and only blessed one.',
  },
];

// ─── Night Prayers ───

const nightPrayers: Prayer[] = [
  {
    title: 'Compline Prayer',
    type: 'prayer',
    duration: 1.5,
    text: 'O Lord, Lord, Who hast delivered us from every arrow that flieth by day, deliver us from everything that walketh in darkness. Receive the lifting up of our hands as an evening sacrifice. Make us worthy also to pass the course of the night blamelessly, free from evil, and vouchsafe us the morning light, as we cry to Thee:\n\nFill our mouths with Thy praise, O Lord, that we may sing of Thy glory, and of Thy grandeur all the day long. Amen.',
  },
  ...eveningPrayers.slice(1),
];

// ─── Psalms ───

const psalms: Prayer[] = [
  {
    title: 'Psalm 50 (51) — A Psalm of Repentance',
    type: 'psalm',
    duration: 2,
    rubric: 'The great penitential psalm of King David',
    text: 'Have mercy on me, O God, according to Thy great mercy; and according to the multitude of Thy compassions blot out my transgression.\n\nWash me thoroughly from my iniquity, and cleanse me from my sin. For I know my transgression, and my sin is ever before me.\n\nAgainst Thee only have I sinned and done evil in Thy sight, that Thou mightest be justified in Thy words, and prevail when Thou art judged.\n\nFor behold, I was conceived in iniquities, and in sins did my mother bear me. For behold, Thou hast loved truth; the hidden and secret things of Thy wisdom Thou hast made manifest unto me.\n\nThou shalt sprinkle me with hyssop, and I shall be made clean; Thou shalt wash me, and I shall be made whiter than snow. Thou shalt make me to hear joy and gladness; the bones that be humbled shall rejoice.\n\nTurn Thy face away from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and renew a right spirit within me.\n\nCast me not away from Thy presence, and take not Thy Holy Spirit from me. Restore unto me the joy of Thy salvation, and with Thy governing Spirit establish me.\n\nI shall teach transgressors Thy ways, and the ungodly shall turn back unto Thee. Deliver me from blood-guiltiness, O God, Thou God of my salvation; my tongue shall rejoice in Thy righteousness.\n\nO Lord, Thou shalt open my lips, and my mouth shall declare Thy praise. For if Thou hadst desired sacrifice, I would have given it; with whole-burnt offerings Thou shalt not be pleased.\n\nA sacrifice unto God is a broken spirit; a heart that is broken and humbled God will not despise. Do good, O Lord, in Thy good pleasure unto Zion, and let the walls of Jerusalem be built.\n\nThen shalt Thou be pleased with a sacrifice of righteousness, with oblation and whole-burnt offerings. Then shall they offer bullocks upon Thine altar.',
  },
  {
    title: 'Psalm 90 (91) — He Who Dwells in the Help of the Most High',
    type: 'psalm',
    duration: 2,
    rubric: 'A psalm of protection, often read in times of trouble',
    text: 'He that dwelleth in the help of the Most High shall abide in the shelter of the God of heaven. He shall say unto the Lord: Thou art my helper and my refuge. He is my God, and I will hope in Him.\n\nFor He shall deliver thee from the snare of the hunters and from every troubling word. With His shoulders shall He overshadow thee, and under His wings shalt thou have hope. With a shield shall His truth encompass thee.\n\nThou shalt not be afraid for the terror by night, nor for the arrow that flieth by day, nor for the thing that walketh in darkness, nor for the mishap and demon of noonday.\n\nA thousand shall fall at thy side, and ten thousand at thy right hand, but unto thee it shall not come nigh. Only with thine eyes shalt thou behold, and thou shalt see the reward of sinners.\n\nFor Thou, O Lord, art my hope. Thou hast made the Most High thy refuge; no evils shall come nigh thee, and no scourge shall draw nigh unto thy dwelling.\n\nFor He shall give His Angels charge over thee, to keep thee in all thy ways. On their hands shall they bear thee up, lest at any time thou dash thy foot against a stone.\n\nUpon the asp and the basilisk shalt thou tread, and thou shalt trample upon the lion and the dragon. For he hath set his hope on Me, and I will deliver him; I will shelter him because he hath known My Name.\n\nHe shall cry unto Me, and I will hearken unto him. I am with him in affliction, and I will rescue him and glorify him. With length of days will I satisfy him, and I will show him My salvation.',
  },
  {
    title: 'Psalm 103 (104) — A Psalm of Creation',
    type: 'psalm',
    duration: 3,
    rubric: 'The opening psalm of Vespers, praising God as Creator',
    text: 'Bless the Lord, O my soul. O Lord my God, Thou hast been magnified exceedingly. Confession and majesty hast Thou put on, Who coverest Thyself with light as with a garment, Who stretchest out the heaven as it were a curtain.\n\nWho layeth the beams of His upper chambers in the waters, Who appointeth the clouds for His ascent, Who walketh upon the wings of the winds, Who maketh His Angels spirits, and His ministers a flame of fire.\n\nWho establisheth the earth in the sureness thereof; it shall not be turned back forever and ever. The abyss like a garment is His mantle; upon the mountains shall the waters stand.\n\nAt Thy rebuke they shall flee, at the voice of Thy thunder shall they be afraid. The mountains rise up and the plains sink down, unto the place where Thou hast established them.\n\nThou appointedst a bound that they shall not pass, neither return to cover the earth. He sendeth forth springs in the valleys; between the mountains will the waters run.\n\nThey shall give drink to all the beasts of the field; the wild asses will wait to quench their thirst. Beside them will the birds of the heaven lodge, from the midst of the rocks will they give voice.\n\nHow magnified are Thy works, O Lord! In wisdom hast Thou made them all; the earth is filled with Thy creation.\n\nGlory to Thee, O Lord, Who hast made them all!',
  },
  {
    title: 'Psalm 33 (34) — I Will Bless the Lord at All Times',
    type: 'psalm',
    duration: 2,
    rubric: 'A psalm of thanksgiving and trust',
    text: 'I will bless the Lord at all times; His praise shall continually be in my mouth. In the Lord shall my soul be praised; let the meek hear and be glad.\n\nO magnify the Lord with me, and let us exalt His Name together. I sought the Lord, and He heard me, and delivered me from all my tribulations.\n\nCome unto Him, and be enlightened, and your faces shall not be ashamed. This poor man cried, and the Lord heard him, and saved him out of all his tribulations.\n\nThe angel of the Lord will encamp round about them that fear Him, and will deliver them. O taste and see that the Lord is good; blessed is the man that hopeth in Him.\n\nO fear the Lord, all ye His saints; for there is no want to them that fear Him. Rich men have turned poor and gone hungry; but they that seek the Lord shall not be deprived of any good thing.\n\nCome, ye children, hearken unto me; I will teach you the fear of the Lord. What man is there that desireth life, who loveth to see good days?\n\nKeep thy tongue from evil, and thy lips from speaking guile. Turn away from evil, and do good; seek peace, and pursue it.\n\nThe eyes of the Lord are upon the righteous, and His ears are open unto their supplication. The Lord is nigh unto them that are of a broken heart, and will save the humble of spirit.\n\nMany are the afflictions of the righteous, and the Lord shall deliver them out of them all. The Lord keepeth all their bones; not one of them shall be broken.\n\nThe Lord shall redeem the souls of His servants, and none of them that hope in Him shall go astray.',
  },
  {
    title: 'Psalm 142 (143) — A Psalm of Supplication',
    type: 'psalm',
    duration: 2,
    rubric: 'A psalm read at Matins',
    text: 'O Lord, hear my prayer, give ear to my supplication in Thy truth; hearken unto me in Thy righteousness. And enter not into judgment with Thy servant, for in Thy sight shall no man living be justified.\n\nFor the enemy hath persecuted my soul; he hath humbled my life down to the earth. He hath sat me in darkness as those that have been long dead, and my spirit within me is become despondent; within me my heart is troubled.\n\nI remembered days of old, I meditated on all Thy works, I pondered on the creations of Thy hands. I stretched forth my hands unto Thee; my soul thirsteth after Thee like a waterless land.\n\nQuickly hear me, O Lord; my spirit hath fainted away. Turn not Thy face away from me, lest I be like unto them that go down into the pit.\n\nCause me to hear Thy mercy in the morning; for in Thee have I put my hope. Cause me to know, O Lord, the way wherein I should walk; for unto Thee have I lifted up my soul.\n\nRescue me from mine enemies, O Lord; unto Thee have I fled for refuge. Teach me to do Thy will, for Thou art my God. Thy good Spirit shall lead me in the land of uprightness.\n\nFor Thy Name\'s sake, O Lord, shalt Thou quicken me. In Thy righteousness shalt Thou bring my soul out of affliction.',
  },
  {
    title: 'Psalm 3 — A Morning Psalm',
    type: 'psalm',
    duration: 1,
    rubric: 'One of the six psalms read at Matins',
    text: 'O Lord, why are they multiplied that afflict me? Many rise up against me. Many say unto my soul: There is no salvation for him in his God.\n\nBut Thou, O Lord, art my helper, my glory, and the lifter up of my head. I cried unto the Lord with my voice, and He heard me out of His holy mountain.\n\nI laid me down and slept; I awoke, for the Lord will help me. I will not be afraid of ten thousands of people that set themselves against me round about.\n\nArise, O Lord, save me, O my God, for Thou hast smitten all who without cause are mine enemies; the teeth of sinners hast Thou broken.\n\nSalvation is of the Lord, and Thy blessing is upon Thy people.',
  },
];

// ─── Scripture Readings ───

const scriptureReadings: Prayer[] = [
  {
    title: 'The Beatitudes — Matthew 5:3-12',
    type: 'scripture',
    duration: 2,
    rubric: 'The words of our Lord from the Sermon on the Mount',
    text: 'Blessed are the poor in spirit, for theirs is the Kingdom of Heaven.\n\nBlessed are those who mourn, for they shall be comforted.\n\nBlessed are the meek, for they shall inherit the earth.\n\nBlessed are those who hunger and thirst for righteousness, for they shall be filled.\n\nBlessed are the merciful, for they shall obtain mercy.\n\nBlessed are the pure in heart, for they shall see God.\n\nBlessed are the peacemakers, for they shall be called sons of God.\n\nBlessed are those who are persecuted for righteousness\' sake, for theirs is the Kingdom of Heaven.\n\nBlessed are you when they revile and persecute you, and say all kinds of evil against you falsely for My sake. Rejoice and be exceedingly glad, for great is your reward in heaven, for so they persecuted the prophets who were before you.',
  },
  {
    title: 'The Gospel of John 1:1-14',
    type: 'scripture',
    duration: 2,
    rubric: 'The Prologue to the Gospel of John, read at Pascha',
    text: 'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made.\n\nIn Him was life, and the life was the light of men. And the light shines in the darkness, and the darkness did not comprehend it.\n\nThere was a man sent from God, whose name was John. This man came for a witness, to bear witness of the Light, that all through him might believe. He was not that Light, but was sent to bear witness of that Light.\n\nThat was the true Light which gives light to every man coming into the world. He was in the world, and the world was made through Him, and the world did not know Him.\n\nHe came to His own, and His own did not receive Him. But as many as received Him, to them He gave the right to become children of God, to those who believe in His Name: who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.\n\nAnd the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the Only-Begotten of the Father, full of grace and truth.',
  },
  {
    title: 'Romans 8:28-39 — Nothing Can Separate Us',
    type: 'scripture',
    duration: 2,
    text: 'And we know that all things work together for good to those who love God, to those who are the called according to His purpose.\n\nFor whom He foreknew, He also predestined to be conformed to the image of His Son, that He might be the firstborn among many brethren.\n\nWhat then shall we say to these things? If God is for us, who can be against us? He who did not spare His own Son, but delivered Him up for us all, how shall He not with Him also freely give us all things?\n\nWho shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?\n\nYet in all these things we are more than conquerors through Him who loved us. For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.',
  },
  {
    title: 'Philippians 4:4-9 — Rejoice in the Lord',
    type: 'scripture',
    duration: 1.5,
    text: 'Rejoice in the Lord always. Again I will say, rejoice!\n\nLet your gentleness be known to all men. The Lord is at hand. Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God.\n\nAnd the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.\n\nFinally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy — meditate on these things.\n\nThe things which you learned and received and heard and saw in me, these do, and the God of peace will be with you.',
  },
  {
    title: '1 Corinthians 13 — The Hymn of Love',
    type: 'scripture',
    duration: 2,
    text: 'Though I speak with the tongues of men and of angels, but have not love, I have become sounding brass or a clanging cymbal. And though I have the gift of prophecy, and understand all mysteries and all knowledge, and though I have all faith, so that I could remove mountains, but have not love, I am nothing.\n\nLove suffers long and is kind; love does not envy; love does not parade itself, is not puffed up; does not behave rudely, does not seek its own, is not provoked, thinks no evil; does not rejoice in iniquity, but rejoices in the truth; bears all things, believes all things, hopes all things, endures all things.\n\nLove never fails. But whether there are prophecies, they will fail; whether there are tongues, they will cease; whether there is knowledge, it will vanish away.\n\nFor now we see in a mirror, dimly, but then face to face. Now I know in part, but then I shall know just as I also am known.\n\nAnd now abide faith, hope, love, these three; but the greatest of these is love.',
  },
];

// ─── Troparia & Special Prayers ───

const tropariaKontakia: Prayer[] = [
  {
    title: 'Troparion of the Resurrection — Tone 1',
    type: 'troparion',
    duration: 0.5,
    text: 'When the stone had been sealed by the Jews, while the soldiers were guarding Thy most pure Body, Thou didst rise on the third day, O Savior, granting life to the world. The powers of heaven therefore cried to Thee, O Giver of Life: Glory to Thy Resurrection, O Christ! Glory to Thy Kingdom! Glory to Thy dispensation, O Thou Who alone art the Lover of mankind!',
  },
  {
    title: 'Troparion of the Cross',
    type: 'troparion',
    duration: 0.5,
    text: 'O Lord, save Thy people and bless Thine inheritance, granting victories to the faithful over their adversaries, and by virtue of Thy Cross, preserving Thy habitation.',
  },
  {
    title: 'Kontakion of the Theotokos',
    type: 'troparion',
    duration: 0.5,
    text: 'O Champion General, I your city now inscribe to you triumphant anthems as the tokens of my gratitude, being rescued from the terrors, O Theotokos. But since you have invincible power, set me free from all kinds of perils, so that I may cry to you: Rejoice, O unwedded Bride!',
  },
  {
    title: 'The Jesus Prayer',
    type: 'prayer',
    duration: 2,
    rubric: 'Repeat slowly and attentively, with the heart:',
    text: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nLord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nLord Jesus Christ, Son of God, have mercy on me, a sinner.\n\n\n— Repeat this prayer slowly and attentively for the remaining time. Breathe naturally. On the inhale, say "Lord Jesus Christ, Son of God." On the exhale, say "have mercy on me, a sinner."\n\nThe Jesus Prayer is the heart of Orthodox spiritual practice. St. Theophan the Recluse taught: "The principal thing is to stand before God with the mind in the heart, and to go on standing before Him unceasingly day and night until the end of life."',
  },
  {
    title: 'Paschal Troparion',
    type: 'troparion',
    duration: 0.5,
    rubric: 'Sung throughout the Paschal season:',
    text: 'Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!',
  },
  {
    title: 'Prayer of the Optina Elders',
    type: 'prayer',
    duration: 2,
    text: 'O Lord, grant me to greet the coming day in peace. Help me in all things to rely upon Thy holy will. In every hour of the day reveal Thy will to me.\n\nBless my dealings with all who surround me. Teach me to treat all that comes to me throughout the day with peace of soul, and with firm conviction that Thy will governs all.\n\nIn all my deeds and words guide my thoughts and feelings. In unforeseen events let me not forget that all are sent by Thee.\n\nTeach me to act firmly and wisely, without embittering and embarrassing others. Give me strength to bear the fatigue of the coming day with all that it shall bring.\n\nDirect my will. Teach me to pray. Pray Thou Thyself in me. Amen.',
  },
];

// ─── Feast-Specific Prayers ───

const paschalPrayers: Prayer[] = [
  {
    title: 'The Paschal Stichera',
    type: 'prayer',
    duration: 2,
    text: 'Let God arise, let His enemies be scattered; let those who hate Him flee from before His face!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nAs smoke vanishes, so let them vanish; as wax melts before the fire!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nSo the sinners will perish before the face of God; but let the righteous be glad!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nThis is the day which the Lord has made! Let us rejoice and be glad in it!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!',
  },
  {
    title: 'Paschal Catechetical Homily of St. John Chrysostom',
    type: 'scripture',
    duration: 3,
    text: 'If any man be devout and love God, let him enjoy this fair and radiant triumphal feast. If any man be a wise servant, let him, rejoicing, enter into the joy of his Lord.\n\nIf any have labored long in fasting, let him now receive his recompense. If any have wrought from the first hour, let him today receive his just reward. If any have come at the third hour, let him with thankfulness keep the feast. If any have arrived at the sixth hour, let him have no misgivings; because he shall in nowise be deprived thereof. If any have delayed until the ninth hour, let him draw near, fearing nothing. If any have tarried even until the eleventh hour, let him also be not alarmed at his tardiness; for the Lord, Who is jealous of His honor, will accept the last even as the first.\n\nHe gives rest unto him who comes at the eleventh hour, even as unto him who has wrought from the first hour. And to the one He gives, and upon the other He bestows gifts. And He accepts the works, and welcomes the intention, and honors the deeds, and praises the offering.\n\nWherefore, enter you all into the joy of your Lord; and receive your reward, both the first and likewise the second. You rich and poor together, hold high festival. You sober and you heedless, honor the day. Rejoice today, both you who have fasted and you who have disregarded the fast. The table is full-laden; feast ye all sumptuously. The calf is fatted; let no one go hungry away.\n\nEnjoy ye all the feast of faith; receive ye all the riches of loving-kindness.\n\nLet no one bewail his poverty, for the universal Kingdom has been revealed. Let no one weep for his iniquities, for pardon has shone forth from the grave. Let no one fear death, for the Savior\'s death has set us free.\n\nHe that was held prisoner of it has annihilated it. By descending into Hell, He made Hell captive. He embittered it when it tasted of His flesh.\n\nChrist is risen, and you, O death, are annihilated! Christ is risen, and the evil ones are cast down! Christ is risen, and the angels rejoice! Christ is risen, and life is liberated!\n\nChrist is risen, and the tomb is emptied of the dead; for Christ, having risen from the dead, is become the first-fruits of those who have fallen asleep.\n\nTo Him be glory and power, now and forever, and from all ages to all ages. Amen!',
  },
];

const nativityPrayers: Prayer[] = [
  {
    title: 'Troparion of the Nativity',
    type: 'troparion',
    duration: 0.5,
    text: 'Thy Nativity, O Christ our God, has shone to the world the light of wisdom. For by it, those who worshipped the stars were taught by a star to adore Thee, the Sun of Righteousness, and to know Thee, the Orient from on high. O Lord, glory to Thee!',
  },
  {
    title: 'Kontakion of the Nativity',
    type: 'kontakion',
    duration: 0.5,
    text: 'Today the Virgin gives birth to the Transcendent One, and the earth offers a cave to the Unapproachable One. Angels with shepherds glorify Him; the wise men journey with a star; since for our sake the eternal God was born as a little Child!',
  },
];

const theophanyPrayers: Prayer[] = [
  {
    title: 'Troparion of Theophany',
    type: 'troparion',
    duration: 0.5,
    text: 'When Thou, O Lord, wast baptized in the Jordan, the worship of the Trinity was made manifest. For the voice of the Father bore witness to Thee, calling Thee His beloved Son; and the Spirit in the form of a dove confirmed the truthfulness of His word. O Christ our God, Who hast revealed Thyself and hast enlightened the world, glory to Thee!',
  },
];

const crossPrayers: Prayer[] = [
  {
    title: 'Troparion of the Cross',
    type: 'troparion',
    duration: 0.5,
    text: 'O Lord, save Thy people, and bless Thine inheritance. Grant victory to the faithful over their adversaries, and by the virtue of Thy Cross, preserve Thy habitation.',
  },
  {
    title: 'Kontakion of the Cross',
    type: 'kontakion',
    duration: 0.5,
    text: 'No longer does the flaming sword guard the gate of Eden, for a glorious quenching has come upon it — the wood of the Cross. The sting of death and the victory of Hades have been driven away. For Thou, O my Savior, hast appeared, crying unto those in Hades: "Enter again into Paradise!"',
  },
];

const lentPrayers: Prayer[] = [
  {
    title: 'Prayer of St. Ephraim the Syrian',
    type: 'prayer',
    duration: 1.5,
    rubric: 'The signature prayer of Great Lent, said with prostrations:',
    text: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk.\n\n(Prostration)\n\nBut give rather the spirit of chastity, humility, patience, and love to Thy servant.\n\n(Prostration)\n\nYea, O Lord and King, grant me to see my own transgressions, and not to judge my brother, for blessed art Thou, unto ages of ages. Amen.\n\n(Prostration)\n\nO God, cleanse me, a sinner. (12 times, with bows)\n\nThen repeat the whole prayer once more, with one prostration at the end.',
  },
  {
    title: 'The Lenten Kontakion',
    type: 'kontakion',
    duration: 0.5,
    text: 'O Champion General, I your city now inscribe to you triumphant anthems as the tokens of my gratitude, being rescued from the terrors, O Theotokos. But since you have invincible power, set me free from all kinds of perils, so that I may cry to you: Rejoice, O unwedded Bride!',
  },
];

const holyWeekPrayers: Prayer[] = [
  {
    title: 'Troparion of Holy Week',
    type: 'troparion',
    duration: 0.5,
    text: 'Behold, the Bridegroom comes at midnight, and blessed is the servant whom He shall find watching; and again, unworthy is the servant whom He shall find heedless. Beware, therefore, O my soul, do not be weighed down with sleep, lest you be given up to death and lest you be shut out of the Kingdom. But rouse yourself crying: Holy, Holy, Holy art Thou, O our God. Through the Theotokos, have mercy on us.',
  },
  {
    title: 'Prayer of Great & Holy Friday',
    type: 'prayer',
    duration: 2,
    text: 'Today He who hung the earth upon the waters is hung upon the Cross.\n\nHe who is the King of the Angels is arrayed in a crown of thorns.\n\nHe who wraps the heavens in clouds is wrapped in the purple of mockery.\n\nHe who in the Jordan set Adam free receives blows upon His face.\n\nThe Bridegroom of the Church is transfixed with nails.\n\nThe Son of the Virgin is pierced with a spear.\n\nWe venerate Thy Passion, O Christ.\n\nShow us also Thy glorious Resurrection.',
  },
];

// ─── Prayer Assembly Logic ───

export function getPrayerRule(
  period: string,
  durationMinutes: number,
  orthodoxDay: { name: string; type: string },
  date: Date
): PrayerRule {
  const opening = [...trisagionPrayers];
  const closing = [...closingPrayers];
  const body: Prayer[] = [];

  const usedTime = opening.reduce((s, p) => s + p.duration, 0) + closing.reduce((s, p) => s + p.duration, 0);
  let remaining = durationMinutes - usedTime;

  // Add feast-specific prayers first
  const feastPrayers = getFeastPrayers(orthodoxDay, date);
  for (const p of feastPrayers) {
    if (remaining >= p.duration) {
      body.push(p);
      remaining -= p.duration;
    }
  }

  // Get time-appropriate prayers
  const timePrayers = getTimePrayers(period);

  // Add prayers until we fill the time
  for (const p of timePrayers) {
    if (remaining < 0.5) break;
    if (remaining >= p.duration && !body.some(b => b.title === p.title)) {
      body.push(p);
      remaining -= p.duration;
    }
  }

  // Fill remaining time with psalms and scripture
  const fillers = [...psalms, ...scriptureReadings];
  // Deterministic shuffle based on date
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const shuffled = fillers.sort((a, b) => {
    const ha = simpleHash(a.title + seed);
    const hb = simpleHash(b.title + seed);
    return ha - hb;
  });

  for (const p of shuffled) {
    if (remaining < 0.5) break;
    if (remaining >= p.duration && !body.some(b => b.title === p.title)) {
      body.push(p);
      remaining -= p.duration;
    }
  }

  // If we still have time, add the Jesus Prayer
  if (remaining >= 1) {
    const jesusPrayer = tropariaKontakia.find(p => p.title === 'The Jesus Prayer')!;
    body.push({ ...jesusPrayer, duration: Math.floor(remaining) });
    remaining = 0;
  }

  return { opening, body, closing };
}

function getFeastPrayers(orthodoxDay: { name: string; type: string }, date: Date): Prayer[] {
  const name = orthodoxDay.name.toLowerCase();

  if (name.includes('pascha') || name.includes('resurrection') || name.includes('bright week')) {
    return paschalPrayers;
  }
  if (name.includes('nativity of christ') || name.includes('christmas')) {
    return nativityPrayers;
  }
  if (name.includes('theophany') || name.includes('epiphany')) {
    return theophanyPrayers;
  }
  if (name.includes('cross') || name.includes('exaltation')) {
    return crossPrayers;
  }
  if (name.includes('great & holy')) {
    return holyWeekPrayers;
  }
  if (name.includes('great lent') || name.includes('clean week')) {
    return lentPrayers;
  }

  // For other feasts, add a troparion
  if (orthodoxDay.type === 'great-feast' || orthodoxDay.type === 'feast') {
    return [tropariaKontakia[0], tropariaKontakia[2]]; // Resurrection troparion + Theotokos kontakion
  }

  return [];
}

function getTimePrayers(period: string): Prayer[] {
  switch (period) {
    case 'morning':
      return morningPrayers;
    case 'midday':
      return middayPrayers;
    case 'afternoon':
      return [...middayPrayers, ...morningPrayers.slice(2)];
    case 'evening':
      return eveningPrayers;
    case 'night':
      return nightPrayers;
    default:
      return morningPrayers;
  }
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}
