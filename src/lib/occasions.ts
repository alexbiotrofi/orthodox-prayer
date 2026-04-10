// Occasion-specific Orthodox prayers (bilingual)

import type { Prayer, Lang } from './prayers';

export interface Occasion {
  id: string;
  label: Record<Lang, string>;
  prayers: Prayer[];
}

export const occasions: Occasion[] = [
  {
    id: 'healing',
    label: { en: 'Healing & Health', el: 'Θεραπεία & Υγεία' },
    prayers: [
      {
        title: { en: 'Prayer for Healing', el: 'Εὐχὴ ὑπὲρ Θεραπείας' },
        type: 'prayer',
        duration: 1.5,
        rubric: { en: 'A prayer to Christ the Physician:', el: 'Προσευχὴ πρὸς τὸν Χριστὸν τὸν Ἰατρόν:' },
        text: {
          en: 'O Christ, Who alone art our Defender: visit and heal Thy suffering servant, delivering him (her) from sickness and grievous pains. Raise him (her) up that he (she) may sing to Thee and praise Thee without ceasing, through the prayers of the Theotokos, O Thou Who alone lovest mankind.',
          el: 'Χριστέ, ὁ μόνος ὑπερασπιστὴς ἡμῶν, ἐπίσκεψαι καὶ ἴασαι τὸν πάσχοντα δοῦλόν Σου (τὴν πάσχουσαν δούλην Σου), ἀπαλλάσσων αὐτὸν (αὐτὴν) ἀπὸ ἀσθενείας καὶ ὀδυνηρῶν πόνων. Ἀνάστησον αὐτὸν (αὐτὴν) ἵνα Σὲ ὑμνῇ καὶ δοξάζῃ ἀκαταπαύστως, ταῖς πρεσβείαις τῆς Θεοτόκου, μόνε Φιλάνθρωπε.',
        },
      },
      {
        title: { en: 'Prayer to the Theotokos for the Sick', el: 'Προσευχὴ πρὸς τὴν Θεοτόκον ὑπὲρ Ἀσθενοῦντος' },
        type: 'prayer',
        duration: 1,
        text: {
          en: 'O Most Holy Theotokos, who art the healing of the sick and the refuge of sinners: heal the body and soul of thy servant, granting health and wholeness, that with a thankful heart we may glorify thee, O all-praised one.\n\nFor thou art the consolation of those who sorrow, the healing of the infirm, and the hope of the hopeless. We cry to thee: heal us, O Lady, from our infirmities, both of body and soul.',
          el: 'Ὑπεραγία Θεοτόκε, ἡ τῶν ἀσθενούντων θεραπεία καὶ τῶν ἁμαρτωλῶν καταφυγή· θεράπευσον σῶμα καὶ ψυχὴν τοῦ δούλου Σου (τῆς δούλης Σου), χαριζομένη ὑγείαν καὶ ὁλοκληρίαν, ἵνα εὐχαρίστῳ καρδίᾳ δοξάζωμέν Σε, Πανύμνητε.\n\nΣὺ γὰρ εἶ ἡ παραμυθία τῶν θλιβομένων, ἡ ἴασις τῶν ἀσθενούντων, καὶ ἡ ἐλπὶς τῶν ἀπηλπισμένων. Βοῶμέν Σοι· ἴασαι ἡμᾶς, Δέσποινα, ἐκ τῶν ἀσθενειῶν ἡμῶν, σωματικῶν τε καὶ ψυχικῶν.',
        },
      },
      {
        title: { en: 'Troparion to St. Panteleimon the Healer', el: 'Ἀπολυτίκιον τοῦ Ἁγίου Παντελεήμονος' },
        type: 'troparion',
        duration: 0.5,
        text: {
          en: 'O holy Great Martyr and Healer Panteleimon, intercede with the merciful God, that He grant our souls forgiveness of transgressions and healing of our infirmities.',
          el: 'Ἅγιε Μεγαλομάρτυς καὶ Ἰαματικὲ Παντελεῆμον, πρέσβευε τῷ ἐλεήμονι Θεῷ, ἵνα πταισμάτων ἄφεσιν παράσχῃ ταῖς ψυχαῖς ἡμῶν καὶ ἴασιν τῶν ἀσθενειῶν ἡμῶν.',
        },
      },
    ],
  },
  {
    id: 'departed',
    label: { en: 'For the Departed', el: 'Ὑπὲρ τῶν Κεκοιμημένων' },
    prayers: [
      {
        title: { en: 'Prayer for the Departed', el: 'Εὐχὴ ὑπὲρ τῶν Κεκοιμημένων' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O God of spirits and of all flesh, Who hast trampled down death and overthrown the devil, and given life to Thy world: do Thou, the same Lord, give rest to the soul of Thy departed servant (name) in a place of brightness, a place of refreshment, a place of repose, where all sickness, sighing, and sorrow have fled away.\n\nPardon every transgression which he (she) has committed, whether by word or deed or thought. For Thou art a good God and lovest mankind; because there is no man who lives yet does not sin, for Thou only art without sin, Thy righteousness is to all eternity, and Thy word is truth.\n\nFor Thou art the Resurrection, the Life, and the Repose of Thy departed servant (name), O Christ our God, and unto Thee we ascribe glory, together with Thy Father, and Thine All-Holy Spirit, now and ever and unto ages of ages. Amen.',
          el: 'Ὁ Θεὸς τῶν πνευμάτων καὶ πάσης σαρκός, ὁ τὸν θάνατον πατήσας καὶ τὸν διάβολον καταργήσας, καὶ ζωὴν τῷ κόσμῳ Σου δωρησάμενος· Αὐτός, Κύριε, ἀνάπαυσον τὴν ψυχὴν τοῦ κεκοιμημένου δούλου Σου (ὄνομα) ἐν τόπῳ φωτεινῷ, ἐν τόπῳ χλοερῷ, ἐν τόπῳ ἀναψύξεως, ἔνθα ἀπέδρα ὀδύνη, λύπη καὶ στεναγμός.\n\nΠᾶν ἁμάρτημα τὸ παρ᾽ αὐτοῦ (αὐτῆς) πραχθέν, ἐν λόγῳ ἢ ἔργῳ ἢ διανοίᾳ, ὡς ἀγαθὸς καὶ φιλάνθρωπος Θεὸς συγχώρησον· ὅτι οὐκ ἔστιν ἄνθρωπος ὃς ζήσεται καὶ οὐχ ἁμαρτήσει· Σὺ γὰρ μόνος ἐκτὸς ἁμαρτίας ὑπάρχεις, ἡ δικαιοσύνη Σου, δικαιοσύνη εἰς τὸν αἰῶνα, καὶ ὁ λόγος Σου ἀλήθεια.\n\nὍτι Σὺ εἶ ἡ Ἀνάστασις, ἡ Ζωὴ καὶ ἡ Ἀνάπαυσις τοῦ κεκοιμημένου δούλου Σου (ὄνομα), Χριστὲ ὁ Θεὸς ἡμῶν, καὶ Σοὶ τὴν δόξαν ἀναπέμπομεν, σὺν τῷ ἀνάρχῳ Σου Πατρί, καὶ τῷ Παναγίῳ Σου Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
        },
      },
      {
        title: { en: 'Kontakion for the Departed', el: 'Κοντάκιον ὑπὲρ τῶν Κεκοιμημένων' },
        type: 'kontakion',
        duration: 0.5,
        text: {
          en: 'With the saints give rest, O Christ, to the soul of Thy servant, where there is neither sickness, nor sorrow, nor sighing, but life everlasting.',
          el: 'Μετὰ τῶν Ἁγίων ἀνάπαυσον, Χριστέ, τὴν ψυχὴν τοῦ δούλου Σου, ἔνθα οὐκ ἔστι πόνος, οὐ λύπη, οὐ στεναγμός, ἀλλὰ ζωὴ ἀτελεύτητος.',
        },
      },
    ],
  },
  {
    id: 'thanksgiving',
    label: { en: 'Thanksgiving', el: 'Εὐχαριστία' },
    prayers: [
      {
        title: { en: 'Prayer of Thanksgiving', el: 'Εὐχαριστήριος Εὐχή' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'Glory to Thee, O Lord, glory to Thee!\n\nO Lord our God, we thank Thee for all the blessings which Thou hast bestowed upon us, both seen and unseen. We thank Thee for this present life, for the blessings we have received, and for the blessings yet to come.\n\nWe thank Thee for every circumstance of our lives, for our joys and for our sorrows, for every consolation and every trial. We thank Thee for everything which Thou hast provided for us, through Jesus Christ our Lord.\n\nTeach us to be truly thankful, not only with our lips but in our whole life, that we may show forth Thy praise, not only with our mouths but with every part of our being. Grant us to live in Thy grace, and to die in Thy love; through Jesus Christ our Lord, to Whom with Thee and the Holy Spirit be all honor and glory, now and forever. Amen.',
          el: 'Δόξα Σοι, Κύριε, δόξα Σοι!\n\nΚύριε ὁ Θεὸς ἡμῶν, εὐχαριστοῦμέν Σοι δι᾽ ὅλας τὰς εὐλογίας ἃς ἐχαρίσω ἡμῖν, ὁρατάς τε καὶ ἀοράτους. Εὐχαριστοῦμέν Σοι διὰ τὴν παροῦσαν ζωήν, διὰ τὰς εὐλογίας ἃς ἐλάβομεν, καὶ διὰ τὰς μελλούσας.\n\nΕὐχαριστοῦμέν Σοι δι᾽ ὅλας τὰς περιστάσεις τῆς ζωῆς ἡμῶν, διὰ τὰς χαρὰς καὶ τὰς θλίψεις, δι᾽ ὅλην τὴν παρηγορίαν καὶ πᾶσαν δοκιμασίαν. Εὐχαριστοῦμέν Σοι δι᾽ ὅλα ὅσα ἐχαρίσω ἡμῖν, διὰ Ἰησοῦ Χριστοῦ τοῦ Κυρίου ἡμῶν.\n\nΔίδαξον ἡμᾶς νὰ εἴμεθα ἀληθῶς εὐχάριστοι, οὐ μόνον τοῖς χείλεσιν ἀλλ᾽ ἐν ὅλῃ τῇ ζωῇ ἡμῶν, ἵνα δεικνύωμεν τὴν αἴνεσίν Σου, οὐ μόνον τῷ στόματι ἀλλ᾽ ἐν παντὶ τῷ εἶναι ἡμῶν. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'travel',
    label: { en: 'Before Travel', el: 'Πρὸ Ταξιδίου' },
    prayers: [
      {
        title: { en: 'Prayer Before a Journey', el: 'Εὐχὴ πρὸ Ὁδοιπορίας' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O Lord Jesus Christ our God, the true and living Way, be Thou, O Master, my companion, guide and guardian during my journey. Deliver and protect me from all danger, misfortune, and temptation.\n\nGrant that I may carry out in peace the purpose of my journey, and that I may reach my destination safely, glorifying Thy holy Name. For Thou art the Way, the Truth, and the Life, and to Thee I give thanks, praise, and worship, together with Thy Eternal Father and Thy All-Holy, Good, and Life-giving Spirit, now and ever, and unto ages of ages. Amen.\n\nO Most Holy Theotokos, save us.',
          el: 'Κύριε Ἰησοῦ Χριστὲ ὁ Θεὸς ἡμῶν, ἡ ἀληθινὴ καὶ ζῶσα ὁδός, γενοῦ μοι, Δέσποτα, συνοδοιπόρος, ὁδηγὸς καὶ φύλαξ κατὰ τὴν ὁδοιπορίαν μου. Λύτρωσαί με καὶ σκέπασόν με ἀπὸ παντὸς κινδύνου, συμφορᾶς καὶ πειρασμοῦ.\n\nΧάρισαί μοι μετ᾽ εἰρήνης νὰ ἐκπληρώσω τὸν σκοπὸν τῆς ὁδοιπορίας μου, καὶ ἀσφαλῶς νὰ φθάσω εἰς τὸν προορισμόν μου, δοξάζων τὸ ἅγιον ὄνομά Σου. Σὺ γὰρ εἶ ἡ Ὁδός, ἡ Ἀλήθεια καὶ ἡ Ζωή, καὶ Σοὶ εὐχαριστίαν, αἶνον καὶ προσκύνησιν ἀναπέμπομεν, σὺν τῷ ἀνάρχῳ Σου Πατρὶ καὶ τῷ Παναγίῳ Σου Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.\n\nΥπεραγία Θεοτόκε, σῶσον ἡμᾶς.',
        },
      },
    ],
  },
  {
    id: 'loved-one',
    label: { en: 'For a Loved One', el: 'Ὑπὲρ Ἀγαπημένου Προσώπου' },
    prayers: [
      {
        title: { en: 'Prayer for a Loved One', el: 'Εὐχὴ ὑπὲρ Ἀγαπημένου Προσώπου' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O Lord Jesus Christ, Who art the Shepherd and Guardian of our souls: I pray Thee to keep and protect Thy servant (name), whom Thou hast redeemed by Thy precious Blood.\n\nGuard him (her) from every evil and every snare of the adversary. Grant him (her) Thy peace which surpasses all understanding. Strengthen him (her) in faith, nourish him (her) with hope, and kindle within him (her) the fire of Thy love.\n\nSend Thy Holy Angel to be his (her) companion and protector, that he (she) may walk in Thy ways all the days of his (her) life. Through the prayers of the Most Holy Theotokos and all Thy Saints. Amen.',
          el: 'Κύριε Ἰησοῦ Χριστέ, ὁ Ποιμὴν καὶ Ἐπίσκοπος τῶν ψυχῶν ἡμῶν· Σὲ παρακαλῶ νὰ φυλάσσῃς καὶ σκεπάζῃς τὸν δοῦλόν Σου (ὄνομα), ὃν (ἣν) ἐξηγόρασας τῷ τιμίῳ Σου Αἵματι.\n\nΔιαφύλαξον αὐτὸν (αὐτὴν) ἀπὸ παντὸς κακοῦ καὶ πάσης παγίδος τοῦ ἀντικειμένου. Χάρισαι αὐτῷ (αὐτῇ) τὴν εἰρήνην Σου τὴν πάντα νοῦν ὑπερέχουσαν. Στερέωσον αὐτὸν (αὐτὴν) ἐν τῇ πίστει, θρέψον ἐν τῇ ἐλπίδι, καὶ ἄναψον ἐν αὐτῷ (αὐτῇ) τὸ πῦρ τῆς ἀγάπης Σου.\n\nἈπόστειλον τὸν ἅγιον Ἄγγελόν Σου συνοδοιπόρον καὶ φύλακα αὐτοῦ (αὐτῆς), ἵνα πορεύηται ἐν ταῖς ὁδοῖς Σου πάσας τὰς ἡμέρας τῆς ζωῆς αὐτοῦ (αὐτῆς). Ταῖς πρεσβείαις τῆς Ὑπεραγίας Θεοτόκου καὶ πάντων τῶν Ἁγίων Σου. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'forgiveness',
    label: { en: 'Forgiveness & Repentance', el: 'Συγχώρησις & Μετάνοια' },
    prayers: [
      {
        title: { en: 'Prayer of Repentance', el: 'Εὐχὴ Μετανοίας' },
        type: 'prayer',
        duration: 2,
        text: {
          en: 'O Lord our God, good and merciful, I acknowledge all my sins which I have committed every day of my life, in thought, word, and deed; in body and soul alike. I am heartily sorry that I have ever offended Thee, and I sincerely repent.\n\nWith tears I humbly pray Thee, O Lord: forgive me all my past sins and absolve me from them. I firmly resolve, with the help of Thy grace, to amend my way of life and to sin no more.\n\nGrant me, O Lord, the strength and the will to make a new beginning. O Lord, Who lovest mankind, hear my prayer and have mercy on me. Through the prayers of the Most Pure Theotokos and all the Saints who have been pleasing to Thee throughout the ages. Amen.',
          el: 'Κύριε ὁ Θεὸς ἡμῶν, ἀγαθὲ καὶ ἐλεῆμον, ὁμολογῶ πάσας τὰς ἁμαρτίας μου ἃς διέπραξα πᾶσαν ἡμέραν τῆς ζωῆς μου, ἐν λόγῳ, ἔργῳ καὶ διανοίᾳ, ἐν σώματι καὶ ψυχῇ. Ἐκ βάθους καρδίας λυποῦμαι ὅτι Σὲ προσέβαλον, καὶ εἰλικρινῶς μετανοῶ.\n\nΜετὰ δακρύων ταπεινῶς Σὲ ἱκετεύω, Κύριε· συγχώρησόν μοι πάσας τὰς παρελθούσας ἁμαρτίας μου καὶ ἀπάλλαξόν με ἀπ᾽ αὐτῶν. Σταθερῶς ἀποφασίζω, μὲ τὴν βοήθειαν τῆς χάριτός Σου, νὰ διορθώσω τὸν βίον μου καὶ νὰ μὴ ἁμαρτήσω πλέον.\n\nΧάρισαί μοι, Κύριε, δύναμιν καὶ θέλησιν διὰ μίαν νέαν ἀρχήν. Κύριε Φιλάνθρωπε, ἐπάκουσον τῆς δεήσεώς μου καὶ ἐλέησόν με. Ταῖς πρεσβείαις τῆς Παναχράντου Θεοτόκου καὶ πάντων τῶν Ἁγίων τῶν ἀπ᾽ αἰῶνος Σοὶ εὐαρεστησάντων. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'protection',
    label: { en: 'Protection', el: 'Προστασία' },
    prayers: [
      {
        title: { en: 'Prayer for Protection', el: 'Εὐχὴ ὑπὲρ Προστασίας' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'Lord God Almighty, Who hast made us worthy to reach this hour: protect us from every evil, every snare, and every temptation of the adversary. Keep us pure and blameless.\n\nSet a guard, O Lord, over our mouths and a door of enclosure about our lips. Let not our hearts be inclined to evil words, nor to make excuses for sins.\n\nSend down upon us Thy rich mercies, and grant that we may pass through the remainder of this day, and all the time of our life, in peace and without sin, guided by Thy Holy Angel, that guarded and guided by him, we may attain unto the unity of the faith and the knowledge of Thy glory. For Thou art blessed unto ages of ages. Amen.',
          el: 'Κύριε ὁ Θεὸς ὁ Παντοκράτωρ, ὁ καταξιώσας ἡμᾶς φθάσαι εἰς τὴν ὥραν ταύτην· φύλαξον ἡμᾶς ἀπὸ παντὸς κακοῦ, πάσης παγίδος καὶ παντὸς πειρασμοῦ τοῦ ἀντικειμένου. Διατήρησον ἡμᾶς καθαροὺς καὶ ἀμέμπτους.\n\nΘοῦ, Κύριε, φυλακὴν τῷ στόματι ἡμῶν καὶ θύραν περιοχῆς περὶ τὰ χείλη ἡμῶν. Μὴ ἐκκλίνῃς τὰς καρδίας ἡμῶν εἰς λόγους πονηρίας, τοῦ προφασίζεσθαι προφάσεις ἐν ἁμαρτίαις.\n\nΚατάπεμψον ἐφ᾽ ἡμᾶς τὰ πλούσιά Σου ἐλέη, καὶ χάρισαι ἡμῖν τὸ ὑπόλοιπον τῆς ἡμέρας ταύτης, καὶ πάντα τὸν χρόνον τῆς ζωῆς ἡμῶν, ἐν εἰρήνῃ καὶ ἀναμαρτήτως διελθεῖν, ὁδηγουμένους ὑπὸ τοῦ Ἁγίου Σου Ἀγγέλου. Ὅτι εὐλογητὸς εἶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'peace',
    label: { en: 'Peace & Anxiety', el: 'Εἰρήνη & Ἄγχος' },
    prayers: [
      {
        title: { en: 'Prayer for Inner Peace', el: 'Εὐχὴ ὑπὲρ Ἐσωτερικῆς Εἰρήνης' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O Lord, grant me stillness of heart, that I might hear Thy voice in the silence. Take from me all anxiety, all worry, all restless thoughts that keep me from Thee.\n\nGrant me the peace which the world cannot give — Thy peace, O Christ, which surpasses all understanding. Guard my heart and my mind in Thee.\n\nHelp me to cast all my cares upon Thee, for Thou carest for me. Teach me to trust in Thy providence, knowing that in all things Thou art working for good. Let me rest in Thee, O Lord, and find my strength renewed.\n\nFor Thou hast said: "Come to Me, all who labor and are heavy laden, and I will give you rest." I come to Thee now, O Lord. Give me rest. Amen.',
          el: 'Κύριε, χάρισαί μοι γαλήνην καρδίας, ἵνα ἀκούσω τὴν φωνήν Σου ἐν τῇ σιωπῇ. Ἆρον ἀπ᾽ ἐμοῦ πᾶσαν ἀγωνίαν, πᾶσαν μέριμναν, πάντα ἀνήσυχον λογισμὸν τὸν ἀπομακρύνοντά με ἀπὸ Σοῦ.\n\nΧάρισαί μοι τὴν εἰρήνην ἣν ὁ κόσμος οὐ δύναται δοῦναι — τὴν εἰρήνην Σου, Χριστέ, τὴν πάντα νοῦν ὑπερέχουσαν. Φρούρησον τὴν καρδίαν μου καὶ τὸν νοῦν μου ἐν Σοί.\n\nΒοήθησόν με νὰ ἐπιρρίψω πᾶσαν τὴν μέριμνάν μου ἐπὶ Σέ, ὅτι Σοὶ μέλει περὶ ἐμοῦ. Δίδαξόν με νὰ ἐμπιστεύωμαι τὴν πρόνοιάν Σου, γινώσκων ὅτι ἐν πᾶσι Σὺ ἐργάζεσαι εἰς ἀγαθόν. Ἄφες με νὰ ἀναπαυθῶ ἐν Σοί, Κύριε, καὶ νὰ ἀνανεώσω τὴν δύναμίν μου.\n\nΣὺ γὰρ εἶπας· «Δεῦτε πρός Με, πάντες οἱ κοπιῶντες καὶ πεφορτισμένοι, κἀγὼ ἀναπαύσω ὑμᾶς.» Ἔρχομαι πρὸς Σέ, Κύριε. Ἀνάπαυσόν με. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'guidance',
    label: { en: 'Guidance & Decisions', el: 'Καθοδήγησις & Ἀποφάσεις' },
    prayers: [
      {
        title: { en: 'Prayer for Guidance', el: 'Εὐχὴ ὑπὲρ Καθοδηγήσεως' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O Lord, I know not what to ask of Thee. Thou alone knowest what are my true needs. Thou lovest me more than I know how to love myself.\n\nHelp me to see my real needs which are concealed from me. I dare not ask either a cross or consolation. I can only wait on Thee. My heart is open to Thee.\n\nVisit and help me, for Thy mercy\'s sake. Strike me and heal me, cast me down and raise me up. I worship in silence Thy holy will and Thine inscrutable ways.\n\nI offer myself as a sacrifice to Thee. I put all my trust in Thee. I have no other desire than to fulfil Thy will. Teach me how to pray. Pray Thou Thyself in me. Amen.\n\n— Metropolitan Philaret of Moscow',
          el: 'Κύριε, δὲν γνωρίζω τί νὰ ζητήσω ἀπὸ Σέ. Σὺ μόνος γνωρίζεις ποῖαι εἶναι αἱ ἀληθιναί μου ἀνάγκαι. Σὺ μὲ ἀγαπᾷς περισσότερον ἀπ᾽ ὅσον ἐγὼ δύναμαι νὰ ἀγαπήσω τὸν ἑαυτόν μου.\n\nΒοήθησόν με νὰ ἴδω τὰς ἀληθινάς μου ἀνάγκας, αἱ ὁποῖαι εἶναι κεκρυμμέναι ἀπ᾽ ἐμοῦ. Δὲν τολμῶ νὰ ζητήσω οὔτε σταυρὸν οὔτε παρηγορίαν. Δύναμαι μόνον νὰ ἀναμένω Σέ. Ἡ καρδία μου εἶναι ἀνοικτὴ ἐνώπιόν Σου.\n\nἘπίσκεψαι καὶ βοήθησόν με, χάριν τοῦ ἐλέους Σου. Πλῆξόν με καὶ θεράπευσόν με, κατάβαλέ με καὶ ἀνάστησόν με. Προσκυνῶ ἐν σιωπῇ τὸ ἅγιον θέλημά Σου καὶ τὰς ἀνεξιχνιάστους ὁδούς Σου.\n\nΠροσφέρω ἐμαυτὸν θυσίαν εἰς Σέ. Ὅλην μου τὴν ἐλπίδα εἰς Σὲ ἀναθέτω. Δὲν ἔχω ἄλλην ἐπιθυμίαν εἰ μὴ νὰ πληρώσω τὸ θέλημά Σου. Δίδαξόν με πῶς νὰ προσεύχωμαι. Προσεύχου Σὺ ὁ Ἴδιος ἐν ἐμοί. Ἀμήν.\n\n— Μητροπολίτης Φιλάρετος Μόσχας',
        },
      },
    ],
  },
  {
    id: 'before-meals',
    label: { en: 'Before Meals', el: 'Πρὸ Γεύματος' },
    prayers: [
      {
        title: { en: 'Prayer Before Meals', el: 'Εὐχὴ πρὸ Γεύματος' },
        type: 'prayer',
        duration: 0.5,
        rubric: { en: 'Before eating:', el: 'Πρὸ τοῦ φαγητοῦ:' },
        text: {
          en: 'The eyes of all look to Thee with hope, O Lord, and Thou givest them their food in due season. Thou openest Thy generous hand and fillest every living thing with Thy blessing.\n\nO Christ our God, bless the food and drink of Thy servants, for Thou art holy, always, now and ever and unto ages of ages. Amen.',
          el: 'Οἱ ὀφθαλμοὶ πάντων εἰς Σὲ ἐλπίζουσι, Κύριε, καὶ Σὺ δίδως τὴν τροφὴν αὐτῶν ἐν εὐκαιρίᾳ. Ἀνοίγεις Σὺ τὴν χεῖρά Σου καὶ ἐμπιπλᾷς πᾶν ζῷον εὐδοκίας.\n\nΧριστὲ ὁ Θεὸς ἡμῶν, εὐλόγησον τὴν βρῶσιν καὶ τὴν πόσιν τῶν δούλων Σου, ὅτι Ἅγιος εἶ, πάντοτε, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
        },
      },
      {
        title: { en: 'Prayer After Meals', el: 'Εὐχὴ μετὰ τὸ Γεῦμα' },
        type: 'prayer',
        duration: 0.5,
        rubric: { en: 'After eating:', el: 'Μετὰ τὸ φαγητό:' },
        text: {
          en: 'We thank Thee, O Christ our God, that Thou hast satisfied us with Thy earthly gifts. Deprive us not of Thy heavenly Kingdom, but as Thou didst come among Thy disciples, O Savior, and gave them peace, come also among us and save us. Amen.',
          el: 'Εὐχαριστοῦμέν Σοι, Χριστὲ ὁ Θεὸς ἡμῶν, ὅτι ἐνέπλησας ἡμᾶς τῶν ἐπιγείων Σου ἀγαθῶν· μὴ στερήσῃς ἡμᾶς καὶ τῆς ἐπουρανίου Σου Βασιλείας, ἀλλ᾽ ὡς ἐν μέσῳ τῶν μαθητῶν Σου παρεγένου, Σωτήρ, τὴν εἰρήνην διδοὺς αὐτοῖς, ἐλθὲ καὶ μεθ᾽ ἡμῶν καὶ σῶσον ἡμᾶς. Ἀμήν.',
        },
      },
    ],
  },
  {
    id: 'enemies',
    label: { en: 'For Enemies & Forgiveness', el: 'Ὑπὲρ Ἐχθρῶν & Συγχωρήσεως' },
    prayers: [
      {
        title: { en: 'Prayer for One\'s Enemies', el: 'Εὐχὴ ὑπὲρ τῶν Ἐχθρῶν' },
        type: 'prayer',
        duration: 1.5,
        text: {
          en: 'O Lord, Who didst pray for those who crucified Thee: "Father, forgive them, for they know not what they do" — grant me the grace to forgive those who have wronged me.\n\nSoften my heart, O Lord, and take from me all bitterness, anger, and resentment. Help me to see mine enemies as Thy children, beloved by Thee, and to pray for their salvation as I pray for my own.\n\nBless those who curse me, do good to those who hate me, and pray for those who despitefully use me and persecute me, that I may be a child of my Father Who is in heaven. For He maketh His sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.\n\nGrant peace and reconciliation where there is enmity, O Lord, for Thou art the Prince of Peace. Amen.',
          el: 'Κύριε, ὁ ὑπὲρ τῶν σταυρωσάντων Σε προσευξάμενος· «Πάτερ, ἄφες αὐτοῖς· οὐ γὰρ οἴδασι τί ποιοῦσι» — χάρισαί μοι τὴν χάριν νὰ συγχωρήσω τοὺς ἀδικήσαντάς με.\n\nΜαλάκυνον τὴν καρδίαν μου, Κύριε, καὶ ἆρον ἀπ᾽ ἐμοῦ πᾶσαν πικρίαν, ὀργὴν καὶ μνησικακίαν. Βοήθησόν με νὰ βλέπω τοὺς ἐχθρούς μου ὡς τέκνα Σου, ἀγαπωμένα ὑπὸ Σοῦ, καὶ νὰ προσεύχωμαι ὑπὲρ τῆς σωτηρίας αὐτῶν ὡς καὶ ὑπὲρ τῆς ἰδικῆς μου.\n\nΕὐλόγει τοὺς καταρωμένους μοι, ἀγαθοποίει τοὺς μισοῦντάς με, καὶ προσεύχου ὑπὲρ τῶν ἐπηρεαζόντων με καὶ διωκόντων με, ὅπως γένωμαι υἱὸς τοῦ Πατρός μου τοῦ ἐν οὐρανοῖς. Αὐτὸς γὰρ τὸν ἥλιον Αὐτοῦ ἀνατέλλει ἐπὶ πονηροὺς καὶ ἀγαθούς, καὶ βρέχει ἐπὶ δικαίους καὶ ἀδίκους.\n\nΧάρισαι εἰρήνην καὶ καταλλαγὴν ἔνθα ὑπάρχει ἔχθρα, Κύριε, ὅτι Σὺ εἶ ὁ Ἄρχων τῆς Εἰρήνης. Ἀμήν.',
        },
      },
    ],
  },
];

export function getOccasionById(id: string): Occasion | undefined {
  return occasions.find(o => o.id === id);
}
