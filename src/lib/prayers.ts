// Orthodox prayer content organized by time of day and duration
// Bilingual: English (en) and Greek (el)

export type Lang = 'en' | 'el';

export interface Prayer {
  title: Record<Lang, string>;
  type: 'prayer' | 'psalm' | 'scripture' | 'troparion' | 'kontakion';
  text: Record<Lang, string>;
  duration: number; // estimated minutes to read
  rubric?: Record<Lang, string>;
}

export interface PrayerRule {
  opening: Prayer[];
  body: Prayer[];
  closing: Prayer[];
}

// ─── Opening Prayers (always included) ───

const trisagionPrayers: Prayer[] = [
  {
    title: { en: 'Opening', el: 'Αρχή' },
    type: 'prayer',
    duration: 0.5,
    rubric: { en: 'Make the sign of the Cross and say:', el: 'Κάνε το σημείο του Σταυρού και πες:' },
    text: {
      en: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
      el: 'Εἰς τὸ ὄνομα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος. Ἀμήν.',
    },
  },
  {
    title: { en: 'Initial Prayer', el: 'Εναρκτήριος Προσευχή' },
    type: 'prayer',
    duration: 0.5,
    text: {
      en: 'Glory to Thee, our God, glory to Thee.\n\nO Heavenly King, Comforter, the Spirit of Truth, Who art everywhere present and fillest all things, Treasury of blessings and Giver of life: come and abide in us, and cleanse us from every impurity, and save our souls, O Good One.',
      el: 'Δόξα Σοι, ὁ Θεὸς ἡμῶν, δόξα Σοι.\n\nΒασιλεῦ Οὐράνιε, Παράκλητε, τὸ Πνεῦμα τῆς ἀληθείας, ὁ πανταχοῦ παρὼν καὶ τὰ πάντα πληρῶν, ὁ θησαυρὸς τῶν ἀγαθῶν καὶ ζωῆς χορηγός, ἐλθὲ καὶ σκήνωσον ἐν ἡμῖν καὶ καθάρισον ἡμᾶς ἀπὸ πάσης κηλῖδος καὶ σῶσον, Ἀγαθέ, τὰς ψυχὰς ἡμῶν.',
    },
  },
  {
    title: { en: 'Trisagion', el: 'Τρισάγιον' },
    type: 'prayer',
    duration: 1,
    rubric: { en: 'Say three times:', el: 'Λέγε τρεις φορές:' },
    text: {
      en: 'Holy God, Holy Mighty, Holy Immortal, have mercy on us.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.\n\nO Most Holy Trinity, have mercy on us. Lord, cleanse us from our sins. Master, pardon our transgressions. Holy One, visit and heal our infirmities, for Thy name\'s sake.\n\nLord, have mercy. Lord, have mercy. Lord, have mercy.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.',
      el: 'Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς.\n\nΔόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι, καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.\n\nΠαναγία Τριάς, ἐλέησον ἡμᾶς. Κύριε, ἱλάσθητι ταῖς ἁμαρτίαις ἡμῶν. Δέσποτα, συγχώρησον τὰς ἀνομίας ἡμῖν. Ἅγιε, ἐπίσκεψαι καὶ ἴασαι τὰς ἀσθενείας ἡμῶν, ἕνεκεν τοῦ ὀνόματός σου.\n\nΚύριε, ἐλέησον. Κύριε, ἐλέησον. Κύριε, ἐλέησον.\n\nΔόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι, καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'The Lord\'s Prayer', el: 'Τὸ Πάτερ Ἡμῶν' },
    type: 'prayer',
    duration: 0.5,
    text: {
      en: 'Our Father, Who art in heaven, hallowed be Thy name. Thy Kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.\n\nFor Thine is the kingdom, and the power, and the glory, of the Father, and of the Son, and of the Holy Spirit, now and ever and unto ages of ages. Amen.',
      el: 'Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς, ἁγιασθήτω τὸ ὄνομά σου, ἐλθέτω ἡ βασιλεία σου, γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς. Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον· καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν· καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.\n\nὍτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
];

// ─── Closing Prayers ───

const closingPrayers: Prayer[] = [
  {
    title: { en: 'Dismissal Prayer', el: 'Ἀπόλυσις' },
    type: 'prayer',
    duration: 0.5,
    text: {
      en: 'Lord, have mercy. Lord, have mercy. Lord, have mercy.\n\nGlory to the Father, and to the Son, and to the Holy Spirit, both now and ever and unto ages of ages. Amen.\n\nMore honorable than the Cherubim, and more glorious beyond compare than the Seraphim, without defilement thou gavest birth to God the Word: true Theotokos, we magnify thee.\n\nThrough the prayers of our Holy Fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.',
      el: 'Κύριε, ἐλέησον. Κύριε, ἐλέησον. Κύριε, ἐλέησον.\n\nΔόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι, καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.\n\nΤὴν τιμιωτέραν τῶν Χερουβείμ καὶ ἐνδοξοτέραν ἀσυγκρίτως τῶν Σεραφείμ, τὴν ἀδιαφθόρως Θεὸν Λόγον τεκοῦσαν, τὴν ὄντως Θεοτόκον, σὲ μεγαλύνομεν.\n\nΔι᾽ εὐχῶν τῶν Ἁγίων Πατέρων ἡμῶν, Κύριε Ἰησοῦ Χριστὲ ὁ Θεός, ἐλέησον καὶ σῶσον ἡμᾶς. Ἀμήν.',
    },
  },
];

// ─── Morning Prayers ───

const morningPrayers: Prayer[] = [
  {
    title: { en: 'Morning Prayer to the Holy Trinity', el: 'Πρωινὴ Προσευχὴ πρὸς τὴν Ἁγίαν Τριάδα' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'Having risen from sleep, I fall down before Thee, O Blessed One, and sing to Thee, O Mighty One, the Angelic Hymn: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.\n\nGlory to the Father, and to the Son, and to the Holy Spirit.\n\nFrom my bed and from sleep Thou hast raised me, O Lord. Enlighten my mind and my heart, and open my lips that I may praise Thee, O Holy Trinity: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.\n\nBoth now and ever and unto ages of ages. Amen.\n\nSuddenly the Judge shall come, and the deeds of each shall be revealed. But with fear we cry out in the middle of the night: Holy, Holy, Holy art Thou, O God. Through the Theotokos, have mercy on me.',
      el: 'Ἐξ ὕπνου ἀναστάς, προσπίπτω Σοι, Ἀγαθέ, καὶ τὸν τῶν Ἀγγέλων ὕμνον βοῶ Σοι, Δυνατέ· Ἅγιος, Ἅγιος, Ἅγιος εἶ ὁ Θεός· διὰ τῆς Θεοτόκου ἐλέησόν με.\n\nΔόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι.\n\nΤῆς κλίνης καὶ τοῦ ὕπνου ἐξεγείρας με, Κύριε, τὸν νοῦν μου φώτισον καὶ τὴν καρδίαν, καὶ τὰ χείλη μου ἄνοιξον, εἰς τὸ ὑμνεῖν Σε, Ἁγία Τριάς· Ἅγιος, Ἅγιος, Ἅγιος εἶ ὁ Θεός· διὰ τῆς Θεοτόκου ἐλέησόν με.\n\nΚαὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.\n\nἈθρόον ὁ Κριτὴς ἐπελεύσεται, καὶ ἑκάστου αἱ πράξεις γυμνωθήσονται· ἀλλὰ φόβῳ κράξωμεν ἐν τῷ μέσῳ τῆς νυκτός· Ἅγιος, Ἅγιος, Ἅγιος εἶ ὁ Θεός· διὰ τῆς Θεοτόκου ἐλέησόν με.',
    },
  },
  {
    title: { en: 'Prayer of St. Macarius the Great', el: 'Εὐχὴ τοῦ Ἁγίου Μακαρίου τοῦ Μεγάλου' },
    type: 'prayer',
    duration: 2,
    text: {
      en: 'O God, cleanse me, a sinner, for I have never done anything good in Thy sight; but deliver me from the Evil One, and let Thy will be in me, that I may open my unworthy mouth without condemnation, and praise Thy Holy Name, of the Father, and of the Son, and of the Holy Spirit, now and ever and unto ages of ages. Amen.',
      el: 'Ὁ Θεός, καθάρισόν με τὸν ἁμαρτωλόν, ὅτι οὐδέποτε ἐποίησα ἐνώπιόν Σου τὸ ἀγαθόν· ἀλλὰ ῥῦσαί με ἀπὸ τοῦ πονηροῦ, καὶ γενηθήτω ἐν ἐμοὶ τὸ θέλημά Σου, ἵνα ἀκατακρίτως ἀνοίξω τὸ ἀνάξιόν μου στόμα καὶ αἰνέσω τὸ ὄνομά Σου τὸ ἅγιον, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'Morning Prayer of Dedication', el: 'Πρωινὴ Προσευχὴ Ἀφιερώσεως' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'O Lord, grant me to greet the coming day in peace. Help me in all things to rely upon Thy holy will. In every hour of the day reveal Thy will to me. Bless my dealings with all who surround me. Teach me to treat all that comes to me throughout the day with peace of soul, and with firm conviction that Thy will governs all.\n\nIn all my deeds and words guide my thoughts and feelings. In unforeseen events let me not forget that all are sent by Thee. Teach me to act firmly and wisely, without embittering and embarrassing others. Give me strength to bear the fatigue of the coming day with all that it shall bring.\n\nDirect my will, teach me to pray, pray Thou Thyself in me. Amen.',
      el: 'Κύριε, δός μοι τὴν ἐρχομένην ἡμέραν ἐν εἰρήνῃ νὰ ὑποδεχθῶ. Βοήθησέ με ἐν πᾶσι νὰ στηρίζωμαι εἰς τὸ ἅγιον θέλημά Σου. Ἐν πάσῃ ὥρᾳ τῆς ἡμέρας ἀποκάλυψόν μοι τὸ θέλημά Σου. Εὐλόγησον τὰς σχέσεις μου μετὰ πάντων τῶν πέριξ μου. Δίδαξόν με νὰ δέχωμαι πᾶν ὅ,τι μοὶ συμβαίνει καθ᾽ ὅλην τὴν ἡμέραν μετὰ γαλήνης ψυχῆς καὶ σταθερᾶς πεποιθήσεως ὅτι τὸ θέλημά Σου κυβερνᾷ τὰ πάντα.\n\nἘν πᾶσι τοῖς ἔργοις μου καὶ τοῖς λόγοις μου κατεύθυνον τοὺς λογισμούς μου καὶ τὰ αἰσθήματά μου. Εἰς τὰ ἀπρόοπτα μὴ μὲ ἀφήσῃς νὰ λησμονήσω ὅτι πάντα ἀπὸ Σὲ ἐστάλησαν. Δίδαξόν με νὰ ἐνεργῶ σταθερῶς καὶ σοφῶς, χωρὶς νὰ πικραίνω καὶ νὰ ἐντροπιάζω τοὺς ἄλλους. Δός μοι δύναμιν νὰ ὑποφέρω τὸν κόπον τῆς ἐρχομένης ἡμέρας μετὰ πάντων ὅσα θὰ φέρῃ.\n\nΚατεύθυνον τὸ θέλημά μου, δίδαξόν με νὰ προσεύχωμαι, προσεύχου Σὺ ὁ Ἴδιος ἐν ἐμοί. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer to the Theotokos', el: 'Προσευχὴ πρὸς τὴν Θεοτόκον' },
    type: 'prayer',
    duration: 1,
    text: {
      en: 'O Most Holy Lady Theotokos, through thy holy and all-powerful prayers, dispel from me, thy humble and wretched servant, despondency, forgetfulness, folly, carelessness, and all impure, evil, and blasphemous thoughts from my wretched heart and darkened mind.\n\nAnd quench the flame of my passions, for I am poor and wretched. And deliver me from my many cruel memories and enterprises, and free me from all their evil effects. For blessed art thou by all generations, and glorified is thy most honorable name unto ages of ages. Amen.',
      el: 'Ὑπεραγία Δέσποινα Θεοτόκε, διὰ τῶν ἁγίων καὶ παντοδυνάμων πρεσβειῶν Σου, ἀπέλασον ἀπ᾽ ἐμοῦ τοῦ ταπεινοῦ καὶ ἀθλίου δούλου Σου, ἀκηδίαν, λήθην, ἀφροσύνην, ἀμέλειαν, καὶ πάντα τὰ ἀκάθαρτα, πονηρὰ καὶ βλάσφημα λογίσματα ἀπὸ τῆς ἀθλίας μου καρδίας καὶ ἐσκοτισμένου νοός μου.\n\nΚαὶ σβέσον τὸ πῦρ τῶν παθῶν μου, ὅτι πτωχὸς εἰμὶ καὶ ταλαίπωρος. Καὶ ῥῦσαί με ἐκ τῶν πολλῶν σκληρῶν μνημῶν καὶ ἐπιχειρήσεων, καὶ ἐλευθέρωσόν με ἀπὸ πασῶν τῶν κακῶν ἐνεργειῶν αὐτῶν. Ὅτι εὐλογημένη εἶ ὑπὸ πασῶν τῶν γενεῶν, καὶ δοξάζεται τὸ πανσεβάσμιον ὄνομά Σου εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer to the Guardian Angel', el: 'Προσευχὴ πρὸς τὸν Φύλακα Ἄγγελον' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'O Holy Angel, attending my wretched soul and my passionate life, forsake me not, a sinner, neither depart from me because of my intemperance. Give no place to the evil demon to subdue me through the oppression of this mortal body; but take me by my wretched and outstretched hand, and lead me to the path of salvation.\n\nO holy Angel of God, the guardian and protector of my wretched soul and body, forgive me all things whereby I have grieved thee all the days of my life; and if I have sinned in anything during the past night, shelter me in the present day, and preserve me from every temptation of the enemy, that I may not anger God by any sin; and pray to the Lord for me, that He may establish me in His fear, and make me a worthy servant of His goodness. Amen.',
      el: 'Ἅγιε Ἄγγελε, ὁ ἐφεστὼς τῆς ἀθλίας μου ψυχῆς καὶ ταλαιπώρου μου ζωῆς, μὴ ἐγκαταλίπῃς με τὸν ἁμαρτωλόν, μηδὲ ἀποστῇς ἀπ᾽ ἐμοῦ διὰ τὴν ἀκρασίαν μου. Μὴ δώσῃς χώραν τῷ πονηρῷ δαίμονι κατακυριεῦσαί μου τῇ καταδυναστείᾳ τοῦ θνητοῦ τούτου σώματος· κράτησον τῆς ἀθλίας καὶ παρειμένης χειρός μου, καὶ ὁδήγησόν με εἰς ὁδὸν σωτηρίας.\n\nΝαί, ἅγιε Ἄγγελε τοῦ Θεοῦ, ὁ φύλαξ καὶ σκεπαστὴς τῆς ἀθλίας μου ψυχῆς καὶ τοῦ σώματος, πάντα μοι συγχώρησον, ὅσα σοι ἔθλιψα πάσας τὰς ἡμέρας τῆς ζωῆς μου· καὶ εἴ τι ἥμαρτον τὴν παρελθοῦσαν νύκτα, σκέπασόν με τὴν παροῦσαν ἡμέραν, καὶ διαφύλαξόν με ἀπὸ παντὸς πειρασμοῦ τοῦ ἐχθροῦ, ἵνα μὴ ἐν τινι ἁμαρτίᾳ παροργίσω τὸν Θεόν· καὶ πρέσβευε ὑπὲρ ἐμοῦ πρὸς τὸν Κύριον, τοῦ στερεῶσαί με ἐν τῷ φόβῳ Αὐτοῦ, καὶ ἄξιον ἀναδεῖξαί με δοῦλον τῆς Αὐτοῦ ἀγαθότητος. Ἀμήν.',
    },
  },
];

// ─── Midday Prayers ───

const middayPrayers: Prayer[] = [
  {
    title: { en: 'Midday Prayer', el: 'Μεσημβρινὴ Προσευχή' },
    type: 'prayer',
    duration: 1,
    text: {
      en: 'O Christ God, Who at all times and at every hour, both in heaven and on earth, art worshipped and glorified; Who art long-suffering, merciful, and compassionate; Who lovest the just and showest mercy upon the sinner; Who callest all to salvation through the promise of blessings to come:\n\nO Lord, in this hour receive our supplications, and direct our lives according to Thy commandments. Sanctify our souls, hallow our bodies, correct our thoughts, cleanse our minds; deliver us from all tribulation, evil, and distress. Encompass us with Thy holy Angels, that guided and guarded by them, we may attain to the unity of the faith and to the knowledge of Thine unapproachable glory, for Thou art blessed unto ages of ages. Amen.',
      el: 'Ὁ ἐν παντὶ καιρῷ καὶ πάσῃ ὥρᾳ, ἐν οὐρανῷ καὶ ἐπὶ γῆς, προσκυνούμενος καὶ δοξαζόμενος Χριστὸς ὁ Θεός, ὁ μακρόθυμος, ὁ πολυέλεος, ὁ πολυεύσπλαγχνος, ὁ τοὺς δικαίους ἀγαπῶν καὶ τοὺς ἁμαρτωλοὺς ἐλεῶν, ὁ πάντας καλῶν πρὸς σωτηρίαν διὰ τῆς ἐπαγγελίας τῶν μελλόντων ἀγαθῶν·\n\nΑὐτός, Κύριε, πρόσδεξαι καὶ ἡμῶν ἐν τῇ ὥρᾳ ταύτῃ τὰς ἐντεύξεις, καὶ ἴθυνον τὴν ζωὴν ἡμῶν πρὸς τὰς ἐντολάς Σου. Τὰς ψυχὰς ἡμῶν ἁγίασον, τὰ σώματα ἅγνισον, τοὺς λογισμοὺς διόρθωσον, τὰς ἐννοίας κάθαρον, καὶ ῥῦσαι ἡμᾶς ἀπὸ πάσης θλίψεως, κακῶν καὶ ὀδύνης. Τείχισον ἡμᾶς ἁγίοις Σου Ἀγγέλοις, ἵνα τῇ παρεμβολῇ αὐτῶν φρουρούμενοι καὶ ὁδηγούμενοι, καταντήσωμεν εἰς τὴν ἑνότητα τῆς πίστεως καὶ εἰς τὴν ἐπίγνωσιν τῆς ἀπροσίτου Σου δόξης· ὅτι εὐλογητὸς εἶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer of St. Ephraim the Syrian', el: 'Εὐχὴ τοῦ Ἁγίου Ἐφραὶμ τοῦ Σύρου' },
    type: 'prayer',
    duration: 1,
    rubric: { en: 'With prostrations during Great Lent:', el: 'Μετὰ μετανοιῶν κατὰ τὴν Μεγάλην Τεσσαρακοστήν:' },
    text: {
      en: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk.\n\nBut give rather the spirit of chastity, humility, patience, and love to Thy servant.\n\nYea, O Lord and King, grant me to see my own transgressions, and not to judge my brother, for blessed art Thou, unto ages of ages. Amen.',
      el: 'Κύριε καὶ Δέσποτα τῆς ζωῆς μου, πνεῦμα ἀργίας, περιεργίας, φιλαρχίας, καὶ ἀργολογίας μή μοι δῷς.\n\nΠνεῦμα δὲ σωφροσύνης, ταπεινοφροσύνης, ὑπομονῆς, καὶ ἀγάπης χάρισαί μοι τῷ σῷ δούλῳ.\n\nΝαί, Κύριε Βασιλεῦ, δώρησαί μοι τοῦ ὁρᾶν τὰ ἐμὰ πταίσματα, καὶ μὴ κατακρίνειν τὸν ἀδελφόν μου· ὅτι εὐλογητὸς εἶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer at the Sixth Hour', el: 'Εὐχὴ τῆς Ἕκτης Ὥρας' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'O Thou Who on the sixth day and at the sixth hour didst nail to the Cross the sin which rebellious Adam had committed in Paradise: tear asunder also the handwriting of our sins, O Christ our God, and save us. Amen.',
      el: 'Ὁ ἐν τῇ ἕκτῃ ἡμέρᾳ τε καὶ ὥρᾳ, τῷ Σταυρῷ προσηλώσας τὴν ἐν τῷ Παραδείσῳ τολμηθεῖσαν τοῦ Ἀδὰμ ἁμαρτίαν, καὶ τῶν ἡμετέρων πταισμάτων τὸ χειρόγραφον διάρρηξον, Χριστὲ ὁ Θεός, καὶ σῶσον ἡμᾶς. Ἀμήν.',
    },
  },
];

// ─── Evening Prayers ───

const eveningPrayers: Prayer[] = [
  {
    title: { en: 'Evening Prayer of Thanksgiving', el: 'Ἑσπερινὴ Εὐχαριστήριος Προσευχή' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'Almighty God, Lord of heaven and earth, and of all creation visible and invisible, in Thine ineffable goodness, look down upon us, Thy people gathered in Thy Holy Name. Be our Helper and Defender in this day and through the coming night. Preserve us from every hostile enemy, from all vain striving of this world, and from the snares of the devil.\n\nGrant that this evening and the approaching night may be peaceful; clothe us with the armor of light. Deliver us from the fear of night and from every evil that walks in darkness. And grant that the sleep which Thou hast appointed for the repose of our frailty may be free from every fantasy of the devil.\n\nYea, O Master of all things and Giver of all good, may we, being moved to compunction upon our beds, remember Thy Name in the night, and, enlightened by meditation upon Thy commandments, rise up in joyfulness of soul to glorify Thy goodness, offering up prayers and supplications to Thy compassion for all our sins, which we have committed in thought, word, and deed. And by Thy mercy, guide us to that calm and quiet haven where is the everlasting rest of Thy blessed ones. For Thou art a good God and the Lover of mankind, and to Thee we ascribe glory: to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.',
      el: 'Παντοκράτορ Θεέ, Κύριε τοῦ οὐρανοῦ καὶ τῆς γῆς καὶ πάσης κτίσεως ὁρατῆς τε καὶ ἀοράτου, ἐν τῇ ἀνεκφράστῳ Σου ἀγαθότητι ἐπίβλεψον ἐφ᾽ ἡμᾶς τὸν λαόν Σου τὸν ἐν τῷ ἁγίῳ Σου ὀνόματι συνηγμένον. Γενοῦ ἡμῶν βοηθὸς καὶ ὑπερασπιστὴς ἐν τῇ ἡμέρᾳ ταύτῃ καὶ ἐν τῇ ἐρχομένῃ νυκτί. Διαφύλαξον ἡμᾶς ἀπὸ παντὸς ἐχθροῦ, ἀπὸ πάσης ματαίας μέριμνας τοῦ κόσμου τούτου, καὶ ἀπὸ τῶν παγίδων τοῦ διαβόλου.\n\nΧάρισαί ἡμῖν τὴν ἑσπέραν ταύτην καὶ τὴν ἐρχομένην νύκτα εἰρηνικήν· ἔνδυσον ἡμᾶς τὴν πανοπλίαν τοῦ φωτός. Ῥῦσαι ἡμᾶς ἀπὸ τοῦ φόβου τῆς νυκτὸς καὶ ἀπὸ παντὸς πονηροῦ τοῦ ἐν σκότει περιπατοῦντος.\n\nΝαί, Δέσποτα τῶν ἁπάντων καὶ χορηγὲ τῶν ἀγαθῶν, ἵνα ἡμεῖς ἐπὶ τῶν κλινῶν ἡμῶν κατανυγέντες, μνημονεύσωμεν τοῦ ὀνόματός Σου ἐν νυκτί, καί, φωτιζόμενοι τῇ μελέτῃ τῶν ἐντολῶν Σου, ἀναστῶμεν ἐν ἀγαλλιάσει ψυχῆς εἰς δοξολογίαν τῆς Σῆς ἀγαθότητος. Ὅτι ἀγαθὸς εἶ Θεὸς καὶ φιλάνθρωπος, καὶ Σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.',
    },
  },
  {
    title: { en: 'Evening Prayer of St. John Chrysostom', el: 'Ἑσπερινὴ Εὐχὴ τοῦ Ἁγίου Ἰωάννου τοῦ Χρυσοστόμου' },
    type: 'prayer',
    duration: 1,
    text: {
      en: 'O Lord, deprive me not of Thy heavenly blessings. O Lord, deliver me from eternal torment. O Lord, if I have sinned in my mind or my thought, in word or in deed, forgive me. O Lord, deliver me from every ignorance and inattention, from a petty soul and a stony hard heart.\n\nO Lord, deliver me from every temptation. O Lord, lighten my heart that has been darkened by evil desires. O Lord, I being human have sinned; but Thou being God, forgive me in Thy loving-kindness, for Thou knowest the weakness of my soul. O Lord, send Thy grace to my help, that I may glorify Thy Holy Name.\n\nO Lord Jesus Christ, enroll me, Thy servant, in the Book of Life, and grant me a blessed end. O Lord my God, even though I have done nothing good in Thy sight, grant me, by Thy grace, to make a good beginning. O Lord, sprinkle into my heart the dew of Thy grace. O Lord of heaven and earth, remember me, Thy sinful servant, full of shame and impurity, in Thy Kingdom. Amen.',
      el: 'Κύριε, μὴ στερήσῃς με τῶν ἐπουρανίων Σου ἀγαθῶν. Κύριε, λύτρωσαί με ἀπὸ τῶν αἰωνίων κολάσεων. Κύριε, εἴτε νοΐ εἴτε λογισμῷ, εἴτε λόγῳ εἴτε ἔργῳ ἥμαρτον, συγχώρησόν μοι. Κύριε, λύτρωσαί με ἀπὸ πάσης ἀγνοίας καὶ ἀπροσεξίας, ἀπὸ μικροψυχίας καὶ λιθίνης ἀναισθησίας.\n\nΚύριε, λύτρωσαί με ἀπὸ παντὸς πειρασμοῦ. Κύριε, φώτισόν μου τὴν καρδίαν, ἣν ἐσκότισεν ἡ πονηρὰ ἐπιθυμία. Κύριε, ἐγὼ μὲν ὡς ἄνθρωπος ἁμαρτάνω, Σὺ δὲ ὡς Θεὸς ἐλέησόν με ἐν εὐσπλαγχνίᾳ, γινώσκων τὴν ἀσθένειαν τῆς ψυχῆς μου. Κύριε, ἀπόστειλον τὴν χάριν Σου εἰς βοήθειάν μου, ἵνα δοξάσω τὸ ὄνομά Σου τὸ ἅγιον.\n\nΚύριε Ἰησοῦ Χριστέ, ἐγγράψον με τὸν δοῦλόν Σου ἐν βίβλῳ ζωῆς, καὶ δώρησαί μοι τέλος ἀγαθόν. Κύριε ὁ Θεός μου, κἂν μηδὲν ἀγαθὸν ἐποίησα ἐνώπιόν Σου, δός μοι κατὰ τὴν χάριν Σου θεῖναι ἀρχὴν ἀγαθήν. Κύριε, ῥάντισον ἐν τῇ καρδίᾳ μου τὴν δρόσον τῆς χάριτός Σου. Κύριε τοῦ οὐρανοῦ καὶ τῆς γῆς, μνήσθητί μου τοῦ ἁμαρτωλοῦ δούλου Σου ἐν τῇ Βασιλείᾳ Σου. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer Before Sleep', el: 'Προσευχὴ πρὸ τοῦ Ὕπνου' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'Into Thy hands, O Lord Jesus Christ, my God, I commit my spirit. Bless me, save me, and grant me eternal life. Amen.\n\nO Lord our God, in Whom we believe, and Whose Name we invoke above every name, grant us, as we go to sleep, relaxation of soul and body, and keep us from all dreams and dark pleasures. Stop the rushing of passions and quench the burning that arises in the flesh. Grant us to live chastely in deed and in word, that we may obtain a virtuous life, and not fall away from Thy promised blessings; for Thou art blessed forever. Amen.',
      el: 'Εἰς τὰς χεῖράς Σου, Κύριε Ἰησοῦ Χριστέ, ὁ Θεός μου, παρατίθημι τὸ πνεῦμά μου. Εὐλόγησόν με, σῶσόν με, καὶ χάρισαί μοι ζωὴν αἰώνιον. Ἀμήν.\n\nΚύριε ὁ Θεὸς ἡμῶν, ἐν ὯΙ πιστεύομεν καὶ Οὗ τὸ ὄνομα ἐπικαλούμεθα ὑπὲρ πᾶν ὄνομα, δὸς ἡμῖν πρὸς ὕπνον ἀπερχομένοις ἄνεσιν ψυχῆς καὶ σώματος, καὶ διαφύλαξον ἡμᾶς ἀπὸ παντὸς ἐνυπνίου καὶ σκοτεινῆς ἡδονῆς. Στῆσον τὸν ῥεμβασμὸν τῶν παθῶν καὶ σβέσον τὴν ἀναφλεγομένην πύρωσιν τῆς σαρκός. Δὸς ἡμῖν σωφρόνως βιοῦν ἐν ἔργοις καὶ λόγοις, ἵνα ἐναρέτου πολιτείας ἐπιτύχωμεν, καὶ μὴ ἐκπέσωμεν τῶν ἐπηγγελμένων Σου ἀγαθῶν· ὅτι εὐλογητὸς εἶ εἰς τοὺς αἰῶνας. Ἀμήν.',
    },
  },
  {
    title: { en: 'Prayer to the Theotokos Before Sleep', el: 'Προσευχὴ πρὸς τὴν Θεοτόκον πρὸ τοῦ Ὕπνου' },
    type: 'prayer',
    duration: 0.5,
    text: {
      en: 'Beneath thy tenderness of heart do we take refuge, O Theotokos. Despise not our petitions in our necessity, but deliver us from harm, O only pure and only blessed one.',
      el: 'Ὑπὸ τὴν σὴν εὐσπλαγχνίαν καταφεύγομεν, Θεοτόκε. Τὰς ἡμῶν ἱκεσίας μὴ παρίδῃς ἐν περιστάσει, ἀλλ᾽ ἐκ κινδύνων λύτρωσαι ἡμᾶς, μόνη ἁγνή, μόνη εὐλογημένη.',
    },
  },
];

// ─── Night Prayers ───

const nightPrayers: Prayer[] = [
  {
    title: { en: 'Compline Prayer', el: 'Εὐχὴ τοῦ Ἀποδείπνου' },
    type: 'prayer',
    duration: 1.5,
    text: {
      en: 'O Lord, Lord, Who hast delivered us from every arrow that flieth by day, deliver us from everything that walketh in darkness. Receive the lifting up of our hands as an evening sacrifice. Make us worthy also to pass the course of the night blamelessly, free from evil, and vouchsafe us the morning light, as we cry to Thee:\n\nFill our mouths with Thy praise, O Lord, that we may sing of Thy glory, and of Thy grandeur all the day long. Amen.',
      el: 'Κύριε, Κύριε, ὁ ῥυσάμενος ἡμᾶς ἀπὸ παντὸς βέλους πετομένου ἡμέρας, ῥῦσαι ἡμᾶς καὶ ἀπὸ παντὸς πράγματος ἐν σκότει διαπορευομένου. Πρόσδεξαι τὴν ἔπαρσιν τῶν χειρῶν ἡμῶν ὡς θυσίαν ἑσπερινήν. Ἀξίωσον δὲ ἡμᾶς καὶ τὸ νυκτερινὸν στάδιον ἀμέμπτως διελθεῖν, ἀπείραστον κακοῦ, καὶ λύτρωσαι ἡμᾶς ἀπὸ πάσης ὀχλήσεως, ὡς βοῶμέν Σοι·\n\nΠλήρωσον τὸ στόμα ἡμῶν αἰνέσεώς Σου, Κύριε, ἵνα ὑμνήσωμεν τὴν δόξαν Σου, ὅτι ἐν ὅλῃ ἡμέρᾳ ἐμεγαλύνθημεν. Ἀμήν.',
    },
  },
  ...eveningPrayers.slice(1),
];

// ─── Psalms ───

const psalms: Prayer[] = [
  {
    title: { en: 'Psalm 50 (51) — A Psalm of Repentance', el: 'Ψαλμὸς Ν΄ (51) — Ψαλμὸς Μετανοίας' },
    type: 'psalm',
    duration: 2,
    rubric: { en: 'The great penitential psalm of King David', el: 'Ὁ μέγας μετανοητικὸς ψαλμὸς τοῦ Βασιλέως Δαυΐδ' },
    text: {
      en: 'Have mercy on me, O God, according to Thy great mercy; and according to the multitude of Thy compassions blot out my transgression.\n\nWash me thoroughly from my iniquity, and cleanse me from my sin. For I know my transgression, and my sin is ever before me.\n\nAgainst Thee only have I sinned and done evil in Thy sight, that Thou mightest be justified in Thy words, and prevail when Thou art judged.\n\nFor behold, I was conceived in iniquities, and in sins did my mother bear me. For behold, Thou hast loved truth; the hidden and secret things of Thy wisdom Thou hast made manifest unto me.\n\nThou shalt sprinkle me with hyssop, and I shall be made clean; Thou shalt wash me, and I shall be made whiter than snow. Thou shalt make me to hear joy and gladness; the bones that be humbled shall rejoice.\n\nTurn Thy face away from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and renew a right spirit within me.\n\nCast me not away from Thy presence, and take not Thy Holy Spirit from me. Restore unto me the joy of Thy salvation, and with Thy governing Spirit establish me.\n\nI shall teach transgressors Thy ways, and the ungodly shall turn back unto Thee. Deliver me from blood-guiltiness, O God, Thou God of my salvation; my tongue shall rejoice in Thy righteousness.\n\nO Lord, Thou shalt open my lips, and my mouth shall declare Thy praise. For if Thou hadst desired sacrifice, I would have given it; with whole-burnt offerings Thou shalt not be pleased.\n\nA sacrifice unto God is a broken spirit; a heart that is broken and humbled God will not despise. Do good, O Lord, in Thy good pleasure unto Zion, and let the walls of Jerusalem be built.\n\nThen shalt Thou be pleased with a sacrifice of righteousness, with oblation and whole-burnt offerings. Then shall they offer bullocks upon Thine altar.',
      el: 'Ἐλέησόν με, ὁ Θεός, κατὰ τὸ μέγα ἔλεός Σου, καὶ κατὰ τὸ πλῆθος τῶν οἰκτιρμῶν Σου ἐξάλειψον τὸ ἀνόμημά μου.\n\nἘπὶ πλεῖον πλῦνόν με ἀπὸ τῆς ἀνομίας μου καὶ ἀπὸ τῆς ἁμαρτίας μου καθάρισόν με. Ὅτι τὴν ἀνομίαν μου ἐγὼ γινώσκω, καὶ ἡ ἁμαρτία μου ἐνώπιόν μού ἐστι διὰ παντός.\n\nΣοὶ μόνῳ ἥμαρτον καὶ τὸ πονηρὸν ἐνώπιόν Σου ἐποίησα, ὅπως ἂν δικαιωθῇς ἐν τοῖς λόγοις Σου, καὶ νικήσῃς ἐν τῷ κρίνεσθαί Σε.\n\nἸδοὺ γὰρ ἐν ἀνομίαις συνελήφθην, καὶ ἐν ἁμαρτίαις ἐκίσσησέ με ἡ μήτηρ μου. Ἰδοὺ γὰρ ἀλήθειαν ἠγάπησας, τὰ ἄδηλα καὶ τὰ κρύφια τῆς σοφίας Σου ἐδήλωσάς μοι.\n\nῬαντιεῖς με ὑσσώπῳ, καὶ καθαρισθήσομαι· πλυνεῖς με, καὶ ὑπὲρ χιόνα λευκανθήσομαι. Ἀκουτιεῖς μοι ἀγαλλίασιν καὶ εὐφροσύνην, ἀγαλλιάσονται ὀστέα τεταπεινωμένα.\n\nἈπόστρεψον τὸ πρόσωπόν Σου ἀπὸ τῶν ἁμαρτιῶν μου καὶ πάσας τὰς ἀνομίας μου ἐξάλειψον. Καρδίαν καθαρὰν κτίσον ἐν ἐμοί, ὁ Θεός, καὶ πνεῦμα εὐθὲς ἐγκαίνισον ἐν τοῖς ἐγκάτοις μου.\n\nΜὴ ἀπορρίψῃς με ἀπὸ τοῦ προσώπου Σου καὶ τὸ Πνεῦμά Σου τὸ Ἅγιον μὴ ἀντανέλῃς ἀπ᾽ ἐμοῦ. Ἀπόδος μοι τὴν ἀγαλλίασιν τοῦ σωτηρίου Σου καὶ πνεύματι ἡγεμονικῷ στήριξόν με.\n\nΔιδάξω ἀνόμους τὰς ὁδούς Σου, καὶ ἀσεβεῖς ἐπὶ Σὲ ἐπιστρέψουσι. Ῥῦσαί με ἐξ αἱμάτων, ὁ Θεὸς ὁ Θεὸς τῆς σωτηρίας μου· ἀγαλλιάσεται ἡ γλῶσσά μου τὴν δικαιοσύνην Σου.\n\nΚύριε, τὰ χείλη μου ἀνοίξεις, καὶ τὸ στόμα μου ἀναγγελεῖ τὴν αἴνεσίν Σου. Ὅτι εἰ ἠθέλησας θυσίαν, ἔδωκα ἄν· ὁλοκαυτώματα οὐκ εὐδοκήσεις.\n\nΘυσία τῷ Θεῷ πνεῦμα συντετριμμένον· καρδίαν συντετριμμένην καὶ τεταπεινωμένην ὁ Θεὸς οὐκ ἐξουδενώσει. Ἀγάθυνον, Κύριε, ἐν τῇ εὐδοκίᾳ Σου τὴν Σιών, καὶ οἰκοδομηθήτω τὰ τείχη Ἰερουσαλήμ.\n\nΤότε εὐδοκήσεις θυσίαν δικαιοσύνης, ἀναφορὰν καὶ ὁλοκαυτώματα· τότε ἀνοίσουσιν ἐπὶ τὸ θυσιαστήριόν Σου μόσχους.',
    },
  },
  {
    title: { en: 'Psalm 90 (91) — He Who Dwells in the Help of the Most High', el: 'Ψαλμὸς Ϟ΄ (91) — Ὁ κατοικῶν ἐν βοηθείᾳ τοῦ Ὑψίστου' },
    type: 'psalm',
    duration: 2,
    rubric: { en: 'A psalm of protection, often read in times of trouble', el: 'Ψαλμὸς προστασίας, ἀναγινωσκόμενος ἐν καιρῷ θλίψεως' },
    text: {
      en: 'He that dwelleth in the help of the Most High shall abide in the shelter of the God of heaven. He shall say unto the Lord: Thou art my helper and my refuge. He is my God, and I will hope in Him.\n\nFor He shall deliver thee from the snare of the hunters and from every troubling word. With His shoulders shall He overshadow thee, and under His wings shalt thou have hope. With a shield shall His truth encompass thee.\n\nThou shalt not be afraid for the terror by night, nor for the arrow that flieth by day, nor for the thing that walketh in darkness, nor for the mishap and demon of noonday.\n\nA thousand shall fall at thy side, and ten thousand at thy right hand, but unto thee it shall not come nigh. Only with thine eyes shalt thou behold, and thou shalt see the reward of sinners.\n\nFor Thou, O Lord, art my hope. Thou hast made the Most High thy refuge; no evils shall come nigh thee, and no scourge shall draw nigh unto thy dwelling.\n\nFor He shall give His Angels charge over thee, to keep thee in all thy ways. On their hands shall they bear thee up, lest at any time thou dash thy foot against a stone.\n\nUpon the asp and the basilisk shalt thou tread, and thou shalt trample upon the lion and the dragon. For he hath set his hope on Me, and I will deliver him; I will shelter him because he hath known My Name.\n\nHe shall cry unto Me, and I will hearken unto him. I am with him in affliction, and I will rescue him and glorify him. With length of days will I satisfy him, and I will show him My salvation.',
      el: 'Ὁ κατοικῶν ἐν βοηθείᾳ τοῦ Ὑψίστου, ἐν σκέπῃ τοῦ Θεοῦ τοῦ οὐρανοῦ αὐλισθήσεται. Ἐρεῖ τῷ Κυρίῳ· Ἀντιλήπτωρ μου εἶ καὶ καταφυγή μου, ὁ Θεός μου, καὶ ἐλπιῶ ἐπ᾽ Αὐτόν.\n\nὍτι Αὐτὸς ῥύσεταί σε ἐκ παγίδος θηρευτῶν καὶ ἀπὸ λόγου ταραχώδους. Ἐν τοῖς μεταφρένοις Αὐτοῦ ἐπισκιάσει σοι, καὶ ὑπὸ τὰς πτέρυγας Αὐτοῦ ἐλπιεῖς· ὅπλῳ κυκλώσει σε ἡ ἀλήθεια Αὐτοῦ.\n\nΟὐ φοβηθήσῃ ἀπὸ φόβου νυκτερινοῦ, ἀπὸ βέλους πετομένου ἡμέρας, ἀπὸ πράγματος ἐν σκότει διαπορευομένου, ἀπὸ συμπτώματος καὶ δαιμονίου μεσημβρινοῦ.\n\nΠεσεῖται ἐκ τοῦ κλίτους σου χιλιὰς καὶ μυριὰς ἐκ δεξιῶν σου, πρὸς σὲ δὲ οὐκ ἐγγιεῖ· πλὴν τοῖς ὀφθαλμοῖς σου κατανοήσεις καὶ ἀνταπόδοσιν ἁμαρτωλῶν ὄψει.\n\nὍτι Σύ, Κύριε, ἡ ἐλπίς μου· τὸν Ὕψιστον ἔθου καταφυγήν σου. Οὐ προσελεύσεται πρὸς σὲ κακά, καὶ μάστιξ οὐκ ἐγγιεῖ τῷ σκηνώματί σου.\n\nὍτι τοῖς Ἀγγέλοις Αὐτοῦ ἐντελεῖται περὶ σοῦ, τοῦ διαφυλάξαι σε ἐν πάσαις ταῖς ὁδοῖς σου. Ἐπὶ χειρῶν ἀροῦσί σε, μήποτε προσκόψῃς πρὸς λίθον τὸν πόδα σου.\n\nἘπ᾽ ἀσπίδα καὶ βασιλίσκον ἐπιβήσῃ καὶ καταπατήσεις λέοντα καὶ δράκοντα. Ὅτι ἐπ᾽ Ἐμὲ ἤλπισε, καὶ ῥύσομαι αὐτόν· σκεπάσω αὐτόν, ὅτι ἔγνω τὸ ὄνομά Μου.\n\nΚεκράξεται πρός Με, καὶ ἐπακούσομαι αὐτοῦ· μετ᾽ αὐτοῦ εἰμι ἐν θλίψει, ἐξελοῦμαι αὐτὸν καὶ δοξάσω αὐτόν. Μακρότητα ἡμερῶν ἐμπλήσω αὐτὸν καὶ δείξω αὐτῷ τὸ σωτήριόν Μου.',
    },
  },
  {
    title: { en: 'Psalm 3 — A Morning Psalm', el: 'Ψαλμὸς Γ΄ — Ψαλμὸς Πρωινός' },
    type: 'psalm',
    duration: 1,
    rubric: { en: 'One of the six psalms read at Matins', el: 'Εἷς ἐκ τῶν ἕξ ψαλμῶν τοῦ Ὄρθρου' },
    text: {
      en: 'O Lord, why are they multiplied that afflict me? Many rise up against me. Many say unto my soul: There is no salvation for him in his God.\n\nBut Thou, O Lord, art my helper, my glory, and the lifter up of my head. I cried unto the Lord with my voice, and He heard me out of His holy mountain.\n\nI laid me down and slept; I awoke, for the Lord will help me. I will not be afraid of ten thousands of people that set themselves against me round about.\n\nArise, O Lord, save me, O my God, for Thou hast smitten all who without cause are mine enemies; the teeth of sinners hast Thou broken.\n\nSalvation is of the Lord, and Thy blessing is upon Thy people.',
      el: 'Κύριε, τί ἐπληθύνθησαν οἱ θλίβοντές με; Πολλοὶ ἐπανίστανται ἐπ᾽ ἐμέ· πολλοὶ λέγουσι τῇ ψυχῇ μου· Οὐκ ἔστι σωτηρία αὐτῷ ἐν τῷ Θεῷ αὐτοῦ.\n\nΣὺ δέ, Κύριε, ἀντιλήπτωρ μου εἶ, δόξα μου καὶ ὑψῶν τὴν κεφαλήν μου. Φωνῇ μου πρὸς Κύριον ἐκέκραξα, καὶ ἐπήκουσέ μου ἐξ ὄρους ἁγίου Αὐτοῦ.\n\nἘγὼ ἐκοιμήθην καὶ ὕπνωσα· ἐξηγέρθην, ὅτι Κύριος ἀντιλήψεταί μου. Οὐ φοβηθήσομαι ἀπὸ μυριάδων λαοῦ, τῶν κύκλῳ συνεπιτιθεμένων μοι.\n\nἈνάστα, Κύριε, σῶσόν με, ὁ Θεός μου, ὅτι Σὺ ἐπάταξας πάντας τοὺς ἐχθραίνοντάς μοι ματαίως· ὀδόντας ἁμαρτωλῶν συνέτριψας.\n\nΤοῦ Κυρίου ἡ σωτηρία, καὶ ἐπὶ τὸν λαόν Σου ἡ εὐλογία Σου.',
    },
  },
];

// ─── Scripture Readings ───

const scriptureReadings: Prayer[] = [
  {
    title: { en: 'The Beatitudes — Matthew 5:3-12', el: 'Οἱ Μακαρισμοὶ — Ματθ. 5:3-12' },
    type: 'scripture',
    duration: 2,
    rubric: { en: 'The words of our Lord from the Sermon on the Mount', el: 'Οἱ λόγοι τοῦ Κυρίου ἐκ τῆς ἐπὶ τοῦ Ὄρους Ὁμιλίας' },
    text: {
      en: 'Blessed are the poor in spirit, for theirs is the Kingdom of Heaven.\n\nBlessed are those who mourn, for they shall be comforted.\n\nBlessed are the meek, for they shall inherit the earth.\n\nBlessed are those who hunger and thirst for righteousness, for they shall be filled.\n\nBlessed are the merciful, for they shall obtain mercy.\n\nBlessed are the pure in heart, for they shall see God.\n\nBlessed are the peacemakers, for they shall be called sons of God.\n\nBlessed are those who are persecuted for righteousness\' sake, for theirs is the Kingdom of Heaven.\n\nBlessed are you when they revile and persecute you, and say all kinds of evil against you falsely for My sake. Rejoice and be exceedingly glad, for great is your reward in heaven, for so they persecuted the prophets who were before you.',
      el: 'Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.\n\nΜακάριοι οἱ πενθοῦντες, ὅτι αὐτοὶ παρακληθήσονται.\n\nΜακάριοι οἱ πραεῖς, ὅτι αὐτοὶ κληρονομήσουσι τὴν γῆν.\n\nΜακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην, ὅτι αὐτοὶ χορτασθήσονται.\n\nΜακάριοι οἱ ἐλεήμονες, ὅτι αὐτοὶ ἐλεηθήσονται.\n\nΜακάριοι οἱ καθαροὶ τῇ καρδίᾳ, ὅτι αὐτοὶ τὸν Θεὸν ὄψονται.\n\nΜακάριοι οἱ εἰρηνοποιοί, ὅτι αὐτοὶ υἱοὶ Θεοῦ κληθήσονται.\n\nΜακάριοι οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.\n\nΜακάριοί ἐστε ὅταν ὀνειδίσωσιν ὑμᾶς καὶ διώξωσι καὶ εἴπωσι πᾶν πονηρὸν ῥῆμα καθ᾽ ὑμῶν ψευδόμενοι ἕνεκεν ἐμοῦ. Χαίρετε καὶ ἀγαλλιᾶσθε, ὅτι ὁ μισθὸς ὑμῶν πολὺς ἐν τοῖς οὐρανοῖς· οὕτω γὰρ ἐδίωξαν τοὺς προφήτας τοὺς πρὸ ὑμῶν.',
    },
  },
  {
    title: { en: 'The Gospel of John 1:1-14', el: 'Κατὰ Ἰωάννην 1:1-14' },
    type: 'scripture',
    duration: 2,
    rubric: { en: 'The Prologue to the Gospel of John, read at Pascha', el: 'Ὁ Πρόλογος τοῦ κατὰ Ἰωάννην Εὐαγγελίου, ἀναγινωσκόμενος τὸ Πάσχα' },
    text: {
      en: 'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made.\n\nIn Him was life, and the life was the light of men. And the light shines in the darkness, and the darkness did not comprehend it.\n\nThere was a man sent from God, whose name was John. This man came for a witness, to bear witness of the Light, that all through him might believe. He was not that Light, but was sent to bear witness of that Light.\n\nThat was the true Light which gives light to every man coming into the world. He was in the world, and the world was made through Him, and the world did not know Him.\n\nHe came to His own, and His own did not receive Him. But as many as received Him, to them He gave the right to become children of God, to those who believe in His Name: who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.\n\nAnd the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the Only-Begotten of the Father, full of grace and truth.',
      el: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος. Οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν Θεόν. Πάντα δι᾽ Αὐτοῦ ἐγένετο, καὶ χωρὶς Αὐτοῦ ἐγένετο οὐδὲ ἓν ὃ γέγονεν.\n\nἘν Αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων. Καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.\n\nἘγένετο ἄνθρωπος ἀπεσταλμένος παρὰ Θεοῦ, ὄνομα αὐτῷ Ἰωάννης. Οὗτος ἦλθεν εἰς μαρτυρίαν, ἵνα μαρτυρήσῃ περὶ τοῦ Φωτός, ἵνα πάντες πιστεύσωσι δι᾽ αὐτοῦ. Οὐκ ἦν ἐκεῖνος τὸ Φῶς, ἀλλ᾽ ἵνα μαρτυρήσῃ περὶ τοῦ Φωτός.\n\nἮν τὸ Φῶς τὸ ἀληθινόν, ὃ φωτίζει πάντα ἄνθρωπον ἐρχόμενον εἰς τὸν κόσμον. Ἐν τῷ κόσμῳ ἦν, καὶ ὁ κόσμος δι᾽ Αὐτοῦ ἐγένετο, καὶ ὁ κόσμος Αὐτὸν οὐκ ἔγνω.\n\nΕἰς τὰ ἴδια ἦλθε, καὶ οἱ ἴδιοι Αὐτὸν οὐ παρέλαβον. Ὅσοι δὲ ἔλαβον Αὐτόν, ἔδωκεν αὐτοῖς ἐξουσίαν τέκνα Θεοῦ γενέσθαι, τοῖς πιστεύουσιν εἰς τὸ ὄνομα Αὐτοῦ· οἳ οὐκ ἐξ αἱμάτων, οὐδὲ ἐκ θελήματος σαρκός, οὐδὲ ἐκ θελήματος ἀνδρός, ἀλλ᾽ ἐκ Θεοῦ ἐγεννήθησαν.\n\nΚαὶ ὁ Λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν, καὶ ἐθεασάμεθα τὴν δόξαν Αὐτοῦ, δόξαν ὡς Μονογενοῦς παρὰ Πατρός, πλήρης χάριτος καὶ ἀληθείας.',
    },
  },
];

// ─── Troparia & Special Prayers ───

const tropariaKontakia: Prayer[] = [
  {
    title: { en: 'Troparion of the Resurrection — Tone 1', el: 'Ἀπολυτίκιον Ἀναστάσιμον — Ἦχος Α΄' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'When the stone had been sealed by the Jews, while the soldiers were guarding Thy most pure Body, Thou didst rise on the third day, O Savior, granting life to the world. The powers of heaven therefore cried to Thee, O Giver of Life: Glory to Thy Resurrection, O Christ! Glory to Thy Kingdom! Glory to Thy dispensation, O Thou Who alone art the Lover of mankind!',
      el: 'Τοῦ λίθου σφραγισθέντος ὑπὸ τῶν Ἰουδαίων, καὶ στρατιωτῶν φυλασσόντων τὸ ἄχραντόν Σου Σῶμα, ἀνέστης τριήμερος, Σωτήρ, δωρούμενος τῷ κόσμῳ τὴν ζωήν· διὰ τοῦτο αἱ Δυνάμεις τῶν οὐρανῶν ἐβόων Σοι, Ζωοδότα· Δόξα τῇ Ἀναστάσει Σου, Χριστέ· δόξα τῇ Βασιλείᾳ Σου· δόξα τῇ οἰκονομίᾳ Σου, μόνε Φιλάνθρωπε.',
    },
  },
  {
    title: { en: 'Troparion of the Cross', el: 'Ἀπολυτίκιον τοῦ Σταυροῦ' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'O Lord, save Thy people and bless Thine inheritance, granting victories to the faithful over their adversaries, and by virtue of Thy Cross, preserving Thy habitation.',
      el: 'Σῶσον, Κύριε, τὸν λαόν Σου καὶ εὐλόγησον τὴν κληρονομίαν Σου, νίκας τοῖς βασιλεῦσι κατὰ βαρβάρων δωρούμενος, καὶ τὸ Σὸν φυλάττων διὰ τοῦ Σταυροῦ Σου πολίτευμα.',
    },
  },
  {
    title: { en: 'Kontakion of the Theotokos', el: 'Κοντάκιον τῆς Θεοτόκου' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'O Champion General, I your city now inscribe to you triumphant anthems as the tokens of my gratitude, being rescued from the terrors, O Theotokos. But since you have invincible power, set me free from all kinds of perils, so that I may cry to you: Rejoice, O unwedded Bride!',
      el: 'Τῇ Ὑπερμάχῳ Στρατηγῷ τὰ νικητήρια, ὡς λυτρωθεῖσα τῶν δεινῶν εὐχαριστήρια, ἀναγράφω Σοι ἡ Πόλις Σου, Θεοτόκε. Ἀλλ᾽ ὡς ἔχουσα τὸ κράτος ἀπροσμάχητον, ἐκ παντοίων με κινδύνων ἐλευθέρωσον, ἵνα κράζω Σοι· Χαῖρε, Νύμφη ἀνύμφευτε!',
    },
  },
  {
    title: { en: 'The Jesus Prayer', el: 'Ἡ Εὐχὴ τοῦ Ἰησοῦ' },
    type: 'prayer',
    duration: 2,
    rubric: { en: 'Repeat slowly and attentively, with the heart:', el: 'Ἐπανέλαβε ἀργὰ καὶ μετὰ προσοχῆς, ἐκ καρδίας:' },
    text: {
      en: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nLord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nLord Jesus Christ, Son of God, have mercy on me, a sinner.\n\n\n— Repeat this prayer slowly and attentively for the remaining time. Breathe naturally. On the inhale, say "Lord Jesus Christ, Son of God." On the exhale, say "have mercy on me, a sinner."\n\nThe Jesus Prayer is the heart of Orthodox spiritual practice. St. Theophan the Recluse taught: "The principal thing is to stand before God with the mind in the heart, and to go on standing before Him unceasingly day and night until the end of life."',
      el: 'Κύριε Ἰησοῦ Χριστέ, Υἱὲ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν.\n\nΚύριε Ἰησοῦ Χριστέ, Υἱὲ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν.\n\nΚύριε Ἰησοῦ Χριστέ, Υἱὲ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν.\n\n\n— Ἐπανέλαβε τὴν προσευχὴν αὐτὴν ἀργὰ καὶ μετὰ προσοχῆς τὸν ὑπόλοιπον χρόνον. Ἀνέπνεε φυσικά. Εἰσπνέοντας λέγε «Κύριε Ἰησοῦ Χριστέ, Υἱὲ τοῦ Θεοῦ». Ἐκπνέοντας λέγε «ἐλέησόν με τὸν ἁμαρτωλόν».\n\nἩ Εὐχὴ τοῦ Ἰησοῦ εἶναι ἡ καρδιὰ τῆς Ὀρθοδόξου πνευματικῆς ζωῆς. Ὁ Ἅγιος Θεοφάνης ὁ Ἔγκλειστος ἐδίδαξε: «Τὸ κυριώτερον εἶναι νὰ ἵστασαι ἐνώπιον τοῦ Θεοῦ μὲ τὸν νοῦν ἐν τῇ καρδίᾳ, καὶ νὰ ἐξακολουθῇς νὰ ἵστασαι ἐνώπιον Αὐτοῦ ἀκαταπαύστως ἡμέραν καὶ νύκτα μέχρι τέλους τῆς ζωῆς».',
    },
  },
  {
    title: { en: 'Paschal Troparion', el: 'Ἀπολυτίκιον τοῦ Πάσχα' },
    type: 'troparion',
    duration: 0.5,
    rubric: { en: 'Sung throughout the Paschal season:', el: 'Ψάλλεται καθ᾽ ὅλην τὴν Πασχαλινὴν περίοδον:' },
    text: {
      en: 'Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!',
      el: 'Χριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!',
    },
  },
  {
    title: { en: 'Prayer of the Optina Elders', el: 'Εὐχὴ τῶν Γερόντων τῆς Ὄπτινα' },
    type: 'prayer',
    duration: 2,
    text: {
      en: 'O Lord, grant me to greet the coming day in peace. Help me in all things to rely upon Thy holy will. In every hour of the day reveal Thy will to me.\n\nBless my dealings with all who surround me. Teach me to treat all that comes to me throughout the day with peace of soul, and with firm conviction that Thy will governs all.\n\nIn all my deeds and words guide my thoughts and feelings. In unforeseen events let me not forget that all are sent by Thee.\n\nTeach me to act firmly and wisely, without embittering and embarrassing others. Give me strength to bear the fatigue of the coming day with all that it shall bring.\n\nDirect my will. Teach me to pray. Pray Thou Thyself in me. Amen.',
      el: 'Κύριε, δός μοι μετ᾽ εἰρήνης ψυχῆς νὰ ὑποδεχθῶ πᾶν ὅ,τι θὰ μοὶ φέρῃ ἡ ἐρχομένη ἡμέρα. Δός μοι νὰ παραδοθῶ ὁλοκλήρως εἰς τὸ ἅγιον θέλημά Σου. Εἰς πᾶσαν ὥραν τῆς ἡμέρας ταύτης διδάξον με καὶ στήριξόν με.\n\nΕὐλόγησον τὰς σχέσεις μου μετὰ πάντων τῶν πέριξ μου. Δίδαξόν με νὰ δέχωμαι μετὰ γαλήνης ψυχῆς πᾶν ὅ,τι μοι συμβαίνει, μὲ σταθερὰν πεποίθησιν ὅτι τὸ θέλημά Σου κυβερνᾷ τὰ πάντα.\n\nΕἰς πάντα τὰ ἔργα μου καὶ τοὺς λόγους μου κατεύθυνον τοὺς λογισμούς μου καὶ τὰ αἰσθήματά μου. Εἰς τὰ ἀπρόοπτα γεγονότα μὴ μὲ ἀφήσῃς νὰ λησμονήσω ὅτι πάντα ἀπὸ Σὲ ἐστάλησαν.\n\nΔίδαξόν με νὰ ἐνεργῶ σταθερῶς καὶ σοφῶς, χωρὶς νὰ πικραίνω τοὺς ἄλλους. Δός μοι δύναμιν νὰ ὑποφέρω τὸν κόπον τῆς ἐρχομένης ἡμέρας μετὰ πάντων ὅσα θὰ φέρῃ.\n\nΚατεύθυνον τὸ θέλημά μου. Δίδαξόν με νὰ προσεύχωμαι. Προσεύχου Σὺ ὁ Ἴδιος ἐν ἐμοί. Ἀμήν.',
    },
  },
];

// ─── Feast-Specific Prayers ───

const paschalPrayers: Prayer[] = [
  {
    title: { en: 'The Paschal Stichera', el: 'Τὰ Πασχάλια Στιχηρά' },
    type: 'prayer',
    duration: 2,
    text: {
      en: 'Let God arise, let His enemies be scattered; let those who hate Him flee from before His face!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nAs smoke vanishes, so let them vanish; as wax melts before the fire!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nSo the sinners will perish before the face of God; but let the righteous be glad!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!\n\nThis is the day which the Lord has made! Let us rejoice and be glad in it!\n\nChrist is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!',
      el: 'Ἀναστήτω ὁ Θεός, καὶ διασκορπισθήτωσαν οἱ ἐχθροὶ Αὐτοῦ, καὶ φυγέτωσαν ἀπὸ προσώπου Αὐτοῦ οἱ μισοῦντες Αὐτόν!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!\n\nὩς ἐκλείπει καπνός, ἐκλιπέτωσαν· ὡς τήκεται κηρὸς ἀπὸ προσώπου πυρός!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!\n\nΟὕτως ἀπολοῦνται οἱ ἁμαρτωλοὶ ἀπὸ προσώπου τοῦ Θεοῦ· καὶ οἱ δίκαιοι εὐφρανθήτωσαν!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!\n\nΑὕτη ἡ ἡμέρα, ἣν ἐποίησεν ὁ Κύριος· ἀγαλλιασώμεθα καὶ εὐφρανθῶμεν ἐν αὐτῇ!\n\nΧριστὸς ἀνέστη ἐκ νεκρῶν, θανάτῳ θάνατον πατήσας, καὶ τοῖς ἐν τοῖς μνήμασι ζωὴν χαρισάμενος!',
    },
  },
];

const nativityPrayers: Prayer[] = [
  {
    title: { en: 'Troparion of the Nativity', el: 'Ἀπολυτίκιον τῶν Χριστουγέννων' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'Thy Nativity, O Christ our God, has shone to the world the light of wisdom. For by it, those who worshipped the stars were taught by a star to adore Thee, the Sun of Righteousness, and to know Thee, the Orient from on high. O Lord, glory to Thee!',
      el: 'Ἡ Γέννησίς Σου, Χριστὲ ὁ Θεὸς ἡμῶν, ἀνέτειλε τῷ κόσμῳ τὸ φῶς τὸ τῆς γνώσεως· ἐν αὐτῇ γὰρ οἱ τοῖς ἄστροις λατρεύοντες, ὑπὸ ἀστέρος ἐδιδάσκοντο Σὲ προσκυνεῖν, τὸν Ἥλιον τῆς δικαιοσύνης, καὶ Σὲ γινώσκειν ἐξ ὕψους Ἀνατολήν. Κύριε, δόξα Σοι!',
    },
  },
  {
    title: { en: 'Kontakion of the Nativity', el: 'Κοντάκιον τῶν Χριστουγέννων' },
    type: 'kontakion',
    duration: 0.5,
    text: {
      en: 'Today the Virgin gives birth to the Transcendent One, and the earth offers a cave to the Unapproachable One. Angels with shepherds glorify Him; the wise men journey with a star; since for our sake the eternal God was born as a little Child!',
      el: 'Ἡ Παρθένος σήμερον τὸν ὑπερούσιον τίκτει, καὶ ἡ γῆ τὸ σπήλαιον τῷ ἀπροσίτῳ προσάγει. Ἄγγελοι μετὰ ποιμένων δοξολογοῦσι, Μάγοι δὲ μετὰ ἀστέρος ὁδοιποροῦσι· δι᾽ ἡμᾶς γὰρ ἐγεννήθη Παιδίον νέον, ὁ πρὸ αἰώνων Θεός!',
    },
  },
];

const theophanyPrayers: Prayer[] = [
  {
    title: { en: 'Troparion of Theophany', el: 'Ἀπολυτίκιον τῶν Θεοφανείων' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'When Thou, O Lord, wast baptized in the Jordan, the worship of the Trinity was made manifest. For the voice of the Father bore witness to Thee, calling Thee His beloved Son; and the Spirit in the form of a dove confirmed the truthfulness of His word. O Christ our God, Who hast revealed Thyself and hast enlightened the world, glory to Thee!',
      el: 'Ἐν Ἰορδάνῃ βαπτιζομένου Σου, Κύριε, ἡ τῆς Τριάδος ἐφανερώθη προσκύνησις· τοῦ γὰρ Γεννήτορος ἡ φωνὴ προσεμαρτύρει Σοι, ἀγαπητὸν Σε Υἱὸν ὀνομάζουσα· καὶ τὸ Πνεῦμα ἐν εἴδει περιστερᾶς ἐβεβαίου τοῦ λόγου τὸ ἀσφαλές. Ὁ ἐπιφανεὶς Χριστὲ ὁ Θεὸς καὶ τὸν κόσμον φωτίσας, δόξα Σοι!',
    },
  },
];

const crossPrayers: Prayer[] = [
  {
    title: { en: 'Troparion of the Cross', el: 'Ἀπολυτίκιον τοῦ Σταυροῦ' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'O Lord, save Thy people, and bless Thine inheritance. Grant victory to the faithful over their adversaries, and by the virtue of Thy Cross, preserve Thy habitation.',
      el: 'Σῶσον, Κύριε, τὸν λαόν Σου καὶ εὐλόγησον τὴν κληρονομίαν Σου, νίκας τοῖς βασιλεῦσι κατὰ βαρβάρων δωρούμενος, καὶ τὸ Σὸν φυλάττων διὰ τοῦ Σταυροῦ Σου πολίτευμα.',
    },
  },
];

const lentPrayers: Prayer[] = [
  {
    title: { en: 'Prayer of St. Ephraim the Syrian', el: 'Εὐχὴ τοῦ Ἁγίου Ἐφραὶμ τοῦ Σύρου' },
    type: 'prayer',
    duration: 1.5,
    rubric: { en: 'The signature prayer of Great Lent, said with prostrations:', el: 'Ἡ κατ᾽ ἐξοχὴν εὐχὴ τῆς Μεγάλης Τεσσαρακοστῆς, λεγομένη μετὰ μετανοιῶν:' },
    text: {
      en: 'O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk.\n\n(Prostration)\n\nBut give rather the spirit of chastity, humility, patience, and love to Thy servant.\n\n(Prostration)\n\nYea, O Lord and King, grant me to see my own transgressions, and not to judge my brother, for blessed art Thou, unto ages of ages. Amen.\n\n(Prostration)\n\nO God, cleanse me, a sinner. (12 times, with bows)\n\nThen repeat the whole prayer once more, with one prostration at the end.',
      el: 'Κύριε καὶ Δέσποτα τῆς ζωῆς μου, πνεῦμα ἀργίας, περιεργίας, φιλαρχίας, καὶ ἀργολογίας μή μοι δῷς.\n\n(Μετάνοια)\n\nΠνεῦμα δὲ σωφροσύνης, ταπεινοφροσύνης, ὑπομονῆς, καὶ ἀγάπης χάρισαί μοι τῷ σῷ δούλῳ.\n\n(Μετάνοια)\n\nΝαί, Κύριε Βασιλεῦ, δώρησαί μοι τοῦ ὁρᾶν τὰ ἐμὰ πταίσματα, καὶ μὴ κατακρίνειν τὸν ἀδελφόν μου· ὅτι εὐλογητὸς εἶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.\n\n(Μετάνοια)\n\nὉ Θεός, ἱλάσθητί μοι τῷ ἁμαρτωλῷ. (12 φορές, μετὰ ὑποκλίσεων)\n\nΕἶτα ἐπανέλαβε ὅλην τὴν εὐχήν, μετὰ μιᾶς μετανοίας εἰς τὸ τέλος.',
    },
  },
];

const holyWeekPrayers: Prayer[] = [
  {
    title: { en: 'Troparion of Holy Week', el: 'Ἀπολυτίκιον τῆς Μεγάλης Ἑβδομάδος' },
    type: 'troparion',
    duration: 0.5,
    text: {
      en: 'Behold, the Bridegroom comes at midnight, and blessed is the servant whom He shall find watching; and again, unworthy is the servant whom He shall find heedless. Beware, therefore, O my soul, do not be weighed down with sleep, lest you be given up to death and lest you be shut out of the Kingdom. But rouse yourself crying: Holy, Holy, Holy art Thou, O our God. Through the Theotokos, have mercy on us.',
      el: 'Ἰδοὺ ὁ Νυμφίος ἔρχεται ἐν τῷ μέσῳ τῆς νυκτός, καὶ μακάριος ὁ δοῦλος ὃν εὑρήσει γρηγοροῦντα· ἀνάξιος δὲ πάλιν ὃν εὑρήσει ῥαθυμοῦντα. Βλέπε οὖν, ψυχή μου, μὴ τῷ ὕπνῳ κατενεχθῇς, ἵνα μὴ τῷ θανάτῳ παραδοθῇς, καὶ τῆς Βασιλείας ἔξω κλεισθῇς· ἀλλὰ ἀνάνηψον κράζουσα· Ἅγιος, Ἅγιος, Ἅγιος εἶ ὁ Θεός· διὰ τῆς Θεοτόκου ἐλέησον ἡμᾶς.',
    },
  },
  {
    title: { en: 'Prayer of Great & Holy Friday', el: 'Προσευχὴ τῆς Μεγάλης Παρασκευῆς' },
    type: 'prayer',
    duration: 2,
    text: {
      en: 'Today He who hung the earth upon the waters is hung upon the Cross.\n\nHe who is the King of the Angels is arrayed in a crown of thorns.\n\nHe who wraps the heavens in clouds is wrapped in the purple of mockery.\n\nHe who in the Jordan set Adam free receives blows upon His face.\n\nThe Bridegroom of the Church is transfixed with nails.\n\nThe Son of the Virgin is pierced with a spear.\n\nWe venerate Thy Passion, O Christ.\n\nShow us also Thy glorious Resurrection.',
      el: 'Σήμερον κρεμᾶται ἐπὶ ξύλου, ὁ ἐν ὕδασι τὴν γῆν κρεμάσας.\n\nΣτέφανον ἐξ ἀκανθῶν περιτίθεται, ὁ τῶν Ἀγγέλων Βασιλεύς.\n\nΨευδῆ πορφύραν περιβάλλεται, ὁ περιβάλλων τὸν οὐρανὸν ἐν νεφέλαις.\n\nῬάπισμα κατεδέξατο, ὁ ἐν Ἰορδάνῃ ἐλευθερώσας τὸν Ἀδάμ.\n\nἭλοις προσηλώθη, ὁ Νυμφίος τῆς Ἐκκλησίας.\n\nΛόγχῃ ἐκεντήθη, ὁ Υἱὸς τῆς Παρθένου.\n\nΠροσκυνοῦμέν Σου τὰ Πάθη, Χριστέ.\n\nΔεῖξον ἡμῖν καὶ τὴν ἔνδοξόν Σου Ἀνάστασιν.',
    },
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
    if (remaining >= p.duration && !body.some(b => b.title.en === p.title.en)) {
      body.push(p);
      remaining -= p.duration;
    }
  }

  // Fill remaining time with psalms and scripture
  const fillers = [...psalms, ...scriptureReadings];
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const shuffled = fillers.sort((a, b) => {
    const ha = simpleHash(a.title.en + seed);
    const hb = simpleHash(b.title.en + seed);
    return ha - hb;
  });

  for (const p of shuffled) {
    if (remaining < 0.5) break;
    if (remaining >= p.duration && !body.some(b => b.title.en === p.title.en)) {
      body.push(p);
      remaining -= p.duration;
    }
  }

  // If we still have time, add the Jesus Prayer
  if (remaining >= 1) {
    const jesusPrayer = tropariaKontakia.find(p => p.title.en === 'The Jesus Prayer')!;
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

  if (orthodoxDay.type === 'great-feast' || orthodoxDay.type === 'feast') {
    return [tropariaKontakia[0], tropariaKontakia[2]];
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
