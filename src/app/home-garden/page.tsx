import React from 'react'

export default function HomeGardenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-farm-green-800">🌱 優しい家庭菜園の学校</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ホーム</a>
                <a href="#about" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">講座について</a>
                <a href="#testimonials" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">お客様の声</a>
                <a href="#offer" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">特別オファー</a>
                <a href="/contact" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">お問い合わせ</a>
                <a href="/gallery" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ギャラリー</a>
                <a href="/faq" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">よくあるご質問</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-farm-green-600 to-farm-green-800 text-white">
        <div className="absolute inset-0 bg-farm-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              誰でもできる！
              <span className="block text-harvest-orange-300">家計を助ける野菜作りの秘密</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-farm-green-100">
              野菜の値上がりが止まらない今、あなたのベランダが<br />
              "家計を救う菜園"に変わる驚きの方法
            </p>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6">毎日のように値上がりする野菜の価格に、家計のやりくりが厳しくなっていませんか？</h2>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <span className="text-red-500 mr-3">😰</span>
                スーパーで野菜を手に取るたび、「また値上がりした…」とため息をついてしまう
              </p>
              <p className="flex items-start">
                <span className="text-red-500 mr-3">💸</span>
                料理に使いたい野菜を我慢して、安いものだけを選んでしまう
              </p>
              <p className="flex items-start">
                <span className="text-red-500 mr-3">😟</span>
                子どもたちに十分な野菜を食べさせてあげられているか不安になる
              </p>
            </div>
          </div>

          <div className="text-center text-lg text-gray-700 mb-8">
            <p className="mb-6 text-xl font-semibold text-farm-green-800">その気持ち、痛いほどわかります。</p>
            <p className="mb-6">実は私も数年前、同じ悩みを抱えていました。野菜の価格高騰に家計が圧迫され、「何とか自分で野菜を育てられないか」と思ったものの、庭がない都会のマンション暮らし。「場所がない」「土いじりは難しそう」「時間がかかりそう」と、あきらめかけていたのです。</p>
          </div>

          <div className="bg-farm-green-50 border-l-4 border-farm-green-400 p-6 text-center">
            <p className="text-gray-700 text-lg mb-4">
              <strong className="text-farm-green-800 text-xl">でも今は違います。</strong>
            </p>
            <p className="text-gray-700 mb-4">
              私の小さなベランダは、次々と新鮮野菜を生み出す「家族の台所」となりました。子どもたちは自分たちで育てた野菜を喜んで食べ、スーパーでの野菜代は以前の半分以下に。
            </p>
            <p className="text-farm-green-800 font-semibold text-lg">
              そして何より、土に触れ、植物が成長する姿を見守る喜びを知りました。
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-farm-green-800 mb-4">「どうやってそんなことができるの？」</p>
            <p className="text-xl text-gray-700">その秘密を今日、あなたにお伝えします。</p>
          </div>
        </div>
      </section>

      {/* 植物との関係性セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 italic mb-8">
              そういえば、植物って黙って育ってくれるのに、<br />
              なぜか見ているだけで心が満たされますよね。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">毎朝、食卓に並ぶ野菜たち。</h3>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>「今日はちょっと元気がないなぁ...」</p>
              <p>「この色、本当に自然のものなのかな...」</p>
              <p>「子どもに安心して食べさせられるかな...」</p>
            </div>
            <p className="text-gray-700 mb-6">
              そんな小さな疑問が、食事のたびに顔を出します。
            </p>
            <p className="text-gray-700">
              多くの家庭では、野菜売り場で立ち止まり、「本当はもっと自然なものを食べさせたい」という気持ちが静かに広がっています。そして「自分で育てられたら...」という小さな夢が芽生えます。
            </p>
          </div>

          <div className="mt-12 bg-gray-100 p-8 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">でもね...</h4>
            <div className="space-y-3 text-gray-700">
              <p>「マンションだし、庭なんてないし...」</p>
              <p>「土いじりなんて小学校以来だし...」</p>
              <p>「毎日世話するの、忙しくて無理かも...」</p>
            </div>
            <p className="text-gray-700 mt-4 font-semibold">
              そんな風に、夢は夢のままで終わってしまいます。
            </p>
          </div>
        </div>
      </section>

      {/* 小さな森の話セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-farm-green-100 to-farm-green-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">しかし今、ある人たちのベランダには不思議な"小さな森"があります。</h3>
            <div className="space-y-4 text-gray-700">
              <p>朝起きたら、目に飛び込んでくる緑の輝き。</p>
              <p>子どもが「今日はどれが食べごろ？」とワクワクしながら観察する森。</p>
              <p>食卓に「今朝採れたよ」と誇らしげに並べられる、そんな不思議な森。</p>
            </div>
            <p className="text-farm-green-800 font-semibold text-lg mt-6">
              これって、なんだか生命の神秘を毎日感じているみたい、と思いませんか？
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-4">
              実はこれ、難しい技術じゃなくて<span className="text-farm-green-800 font-bold">「ちょっとした知恵」</span>の力なんです。
            </p>
          </div>
        </div>
      </section>

      {/* 解決策紹介セクション */}
      <section id="about" className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">🌱 「優しい家庭菜園の学校」</h2>
            <p className="text-xl text-gray-700">
              —それは、ベランダを"心の安らぎを生み出す場所"に変える方法。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-farm-green-800 mb-6">多くの人が家庭菜園で挫折するのには理由があります</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>広い土地がいる、重い土を運ぶ、毎日の水やりが大変...。</p>
                <p className="font-semibold text-farm-green-800">でも「優しい家庭菜園の学校」ではそんな常識を全部ひっくり返します。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-farm-green-800 mb-3">「狭小スペース集約栽培法」</h4>
                <p className="text-gray-700">
                  は、たった1畳のベランダスペースで、小さな自然の循環を作り出す方法なんです。
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-farm-green-800 mb-4">大阪大学農学部 田中教授も驚いた</h4>
              <p className="text-gray-600 italic mb-6">
                「自然の摂理をこんな形で活かすとは！」と驚いたような、ちょっと意外なアプローチ。
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  特殊配合の土
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  ちょっと変わった水やり方法
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  野菜同士の「おともだち作戦」
                </p>
              </div>
              <p className="text-farm-green-800 font-semibold mt-4">
                この組み合わせが、驚きの結果を生み出すのです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 未来のビジョンセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">この方法を知ったら、こんな日常が待っているかもしれません</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🌅</div>
              <p className="text-gray-700 text-center">
                朝、カーテンを開けた瞬間、緑の命に「おはよう」と挨拶する穏やかな時間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🍽️</div>
              <p className="text-gray-700 text-center">
                「これ、ベランダで育ったの？」と、食卓での会話が弾む瞬間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">✨</div>
              <p className="text-gray-700 text-center">
                「ねぇねぇ、これ、パパ（ママ）が育てたの？すごーい！」という子どもの目が輝く喜び。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🤔</div>
              <p className="text-gray-700 text-center">
                「この野菜、どうやって育ったんだろう」という子どもの好奇心が自然と芽生える教育の場。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🧘</div>
              <p className="text-gray-700 text-center">
                朝の水やり5分間が、不思議と「今日も頑張ろう」という気持ちにさせてくれる小さな瞑想時間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🤍</div>
              <p className="text-gray-700 text-center">
                今、あなたのベランダは何をしていますか？ ただの通路？物置き場？それとも、ちょっと寂しい空間？
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-farm-green-800 font-semibold">
              もしかしたら、ベランダは「心の豊かさを育む場所」になるかもしれませんよ。
            </p>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">「優しい家庭菜園の学校」が選ばれる理由</h2>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <p className="text-gray-700 text-lg mb-6">
              従来の家庭菜園は、広い庭が必要で、重労働も多く、失敗も多いものでした。でも「優しい家庭菜園の学校」は違います。
            </p>
            <div className="bg-farm-green-50 p-6 rounded-lg">
              <p className="text-farm-green-800 font-bold text-xl mb-4">
                私たちが開発した「狭小スペース集約栽培法」
              </p>
              <p className="text-gray-700">
                は、わずか1畳分のベランダスペースでも、年間を通じて家族4人分の野菜を収穫できる画期的な方法です。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-12">
            <div className="flex items-center">
              <div className="text-3xl mr-3">🎓</div>
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">大阪大学農学部 田中教授</h4>
                <p className="text-blue-700 italic font-medium">
                  「従来の常識をくつがえす革新的なアプローチ」
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-8">あなたは今、このような未来を手に入れることができます：</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌱</div>
                <p className="text-gray-700">
                  朝起きたら、キッチンに行く前にベランダで採れたての野菜を収穫する喜び
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">💰</div>
                <p className="text-gray-700">
                  スーパーの値上げに一喜一憂せず、家計にゆとりが生まれる安心感
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">👨‍👩‍👧‍👦</div>
                <p className="text-gray-700">
                  「お父さん（お母さん）が育てたの？すごい！」と家族から尊敬の眼差しを向けられる満足感
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌿</div>
                <p className="text-gray-700">
                  添加物や農薬を気にせず、安全で新鮮な野菜を家族に食べさせられる安心
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">🧘‍♀️</div>
                <p className="text-gray-700">
                  土に触れ、生命を育てる癒しの時間が毎日の生活にもたらす心の余裕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">💬 会員様の声</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">佐藤さん（42歳・会社員）</h4>
                  <p className="text-gray-600">東京都在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「マンションの南向きベランダ2畳スペースで始めて半年。今では家族が食べる野菜の7割はベランダ産です。子どもたちも野菜嫌いが治り、食事の時間が楽しくなりました。何より毎月の食費が2万円も減りました！」
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👩‍🍳</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">山田さん（38歳・主婦）</h4>
                  <p className="text-gray-600">大阪市在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「園芸の経験はゼロでしたが、動画マニュアルをそのまま真似るだけで簡単に始められました。最初は半信半疑でしたが、3ヶ月目からはほぼ毎日何かしらの収穫があり、家計の強い味方になっています。特に最近の野菜高騰でその価値を実感しています」
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">鈴木さん（51歳・自営業）</h4>
                  <p className="text-gray-600">名古屋市在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「仕事のストレスで不眠症だった私が、朝晩の水やりと収穫の時間を楽しみに規則正しい生活を送れるようになりました。健康的な食生活と趣味が見つかり、人生が変わったと言っても過言ではありません」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プログラム内容セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">📚 あなたが手に入れるもの</h2>
            <p className="text-xl text-gray-700">
              「優しい家庭菜園の学校」に入会すると、以下のすべてがあなたのものになります：
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">月替わりオンライン講座（毎月更新・永久視聴可能）</h3>
              <p className="text-gray-600 mb-4">まるで隣で教わっているかのような、わかりやすい動画レッスン。初心者でも迷わない、季節ごとの栽培カレンダー付き。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">プロ監修・栽培マニュアル（PDF版＆紙版）</h3>
              <p className="text-gray-600 mb-4">失敗しない土づくりから収穫までの全工程を、写真やイラスト満載で解説。困ったときにすぐ調べられる索引付き。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">会員専用コミュニティアクセス権</h3>
              <p className="text-gray-600 mb-4">同じ志を持つ仲間との情報交換の場。質問し放題の専門家サポートつき。孤独な家庭菜園とはおさらばです。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">四季の種子セット（年4回お届け）</h3>
              <p className="text-gray-600 mb-4">その季節に最適な、有機・無農薬の高品質種子をセレクト。市場では手に入らない希少品種も含む充実のセット。</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-harvest-orange-50 to-harvest-orange-100 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🆘</span>
              <h3 className="text-2xl font-semibold text-farm-green-800">緊急時専門家サポート（月2回まで）</h3>
            </div>
            <p className="text-gray-700">
              植物の異変や急な質問に、園芸のプロが24時間以内に回答。失敗のリスクを最小限に抑えます。
            </p>
          </div>
        </div>
      </section>

      {/* 特別特典セクション */}
      <section className="py-20 bg-gradient-to-r from-harvest-orange-400 to-harvest-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🎁 驚きの特典</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              植物の成長を劇的に促進する「Nパワープラス®」を無料プレゼント！
            </h3>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
            <div className="text-center mb-8">
              <p className="text-lg mb-6">
                今回、期間限定の特別特典として、植物の生育を飛躍的に向上させる微生物栄養剤「Nパワープラス®」（250ml・通常価格5,500円）を1本無料でプレゼントいたします！
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-farm-green-800 mb-4">Nパワープラス®の革命的な発想</h4>
                <p className="text-gray-700 mb-4">
                  Nパワープラス®は、20年以上の研究から生まれた革命的な植物栄養剤です。従来の「外から微生物を入れる」という考え方を根本から変え、「すでにその土地に住む微生物に栄養を与え、活性化させる」という画期的な発想で開発されました。
                </p>
                
                <h5 className="font-semibold text-farm-green-800 mb-3">このNパワープラス®を使うと：</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    土が柔らかく変化し、指で簡単に掘れるようになります
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    植物の根張りが驚くほど良くなり、養分をしっかり吸収します
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    健全な微生物バランスにより、害虫が自然と減少します
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    栄養をしっかり吸収した植物は、より多くの実をつけます
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    本来の栄養バランスで育った作物は、味も香りも格別です
                  </li>
                </ul>
              </div>
              
              <div className="bg-farm-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-farm-green-800 mb-4">安心・安全・簡単</h4>
                <p className="text-gray-700 mb-4">
                  Nパワープラス®は大豆、米糠、糖蜜などすべて天然原料から作られており、化学合成物質は一切使用していません。お子様やペットのいるご家庭でも安心して使えます。
                </p>
                
                <h5 className="font-semibold text-farm-green-800 mb-2">使い方も驚くほど簡単です</h5>
                <p className="text-sm text-gray-600 mb-4">
                  500倍〜1000倍に薄めて（250mlボトルなら125L〜250Lの水に対応）、通常の水やりの代わりに月に1〜2回使用するだけ。家庭菜園なら約6ヶ月分、プランター10個分に対応できます。
                </p>
                
                <div className="bg-harvest-orange-100 p-4 rounded-lg text-center">
                  <p className="text-harvest-orange-700 font-bold">
                    ベランダ菜園には、この「Nパワープラス®」が最適なのです！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 保証制度セクション */}
      <section className="py-12 bg-farm-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-farm-green-800 mb-6">✅ 安心の保証制度</h3>
          <p className="text-lg text-gray-700">
            もし入会から3ヶ月以内に「思ったような収穫が得られない」「続けるのが難しい」と感じられた場合、全額返金いたします。あなたにはリスクがありません。
          </p>
        </div>
      </section>

      {/* 特別オファーセクション */}
      <section id="offer" className="py-20 bg-farm-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">🎯 期間限定・特別オファー</h2>
          
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl mb-8">
            <p className="text-lg mb-8 text-center">
              通常、「優しい家庭菜園の学校」の入会金は30,000円（月会費980円別途）ですが、この春の会員拡大キャンペーンとして、<span className="text-red-600 font-bold">5月15日までにお申し込みの方限定で入会金20,000円</span>にてご案内しています。
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-farm-green-800 mb-4">通常価格</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>入会金</span>
                    <span className="line-through text-gray-500">30,000円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>月会費</span>
                    <span>980円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nパワープラス®</span>
                    <span className="line-through text-gray-500">5,500円</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-harvest-orange-600 mb-4">特別価格（5月15日まで）</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>入会金</span>
                    <span className="text-2xl font-bold text-harvest-orange-600">20,000円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>月会費</span>
                    <span>980円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nパワープラス®</span>
                    <span className="text-green-600 font-bold">無料プレゼント!</span>
                  </div>
                </div>
                <div className="bg-harvest-orange-100 p-3 rounded text-center">
                  <span className="text-harvest-orange-600 font-bold">10,000円 + 5,500円 = 15,500円お得！</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-harvest-orange-600 font-bold text-lg">
                さらに、今だけの特別特典として、植物の成長を劇的に促進する「Nパワープラス®」（通常価格5,500円）を1本無料でプレゼント！
              </p>
            </div>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-2">⚠️ 先着50名様限定！今すぐお申し込みください</h3>
            <p>この特別オファーは、先着50名様限定です。毎回このキャンペーンは数日で定員に達してしまうため、今すぐのお申し込みをおすすめします。</p>
          </div>

          <div className="space-y-6">
            <button className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-6 px-12 rounded-xl text-2xl transition-colors duration-200 shadow-2xl hover:shadow-3xl">
              ＼今すぐ申し込む／
            </button>
          </div>
        </div>
      </section>

      {/* 最後の押しセクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">P.S.</h3>
            <div className="space-y-6 text-gray-700">
              <p>
                野菜の価格は今後も上昇が予想されています。家庭菜園を始めるなら、今がベストタイミングです。入会特典の「Nパワープラス®」は単なる肥料ではなく、土壌環境全体を改善する革命的な微生物栄養剤です。
              </p>
              <p>
                多くのお客様が「長年放置していた畑で使ったところ、3ヶ月で土が見違えるように変わった」「収穫量が2倍以上になった」と驚きの効果を報告しています。
              </p>
              <div className="bg-harvest-orange-50 p-6 rounded-lg border-l-4 border-harvest-orange-400">
                <p className="font-semibold text-harvest-orange-800 mb-4">
                  これだけでも5,500円の価値があります。
                </p>
                <p className="mb-4">
                  この機会を逃さず、家族の健康と家計を守る一歩を今日踏み出してください。迷っている時間が、あなたの家計を圧迫し続けています。
                </p>
                <p className="font-semibold">
                  今すぐ下のボタンをクリックして、未来の自分に感謝される選択をしましょう。
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-4 px-10 rounded-xl text-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                未来の自分に感謝される選択をする
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-farm-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">🌱 優しい家庭菜園の学校</h3>
            <p className="text-farm-green-200 mb-4">家庭菜園で家族の健康と家計を守る</p>
            <div className="text-farm-green-300">
              <p>&copy; 2025 優しい家庭菜園の学校. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 