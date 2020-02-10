import React, { Component } from "react";
import BlogArchive from "./BlogArchive.js";
import BlogNewEntries from "./BlogNewEntries.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlogArticle from "./BlogArticle.js";

class Blog extends Component {
  state = {
    articles: [
      {
        id: "0",
        title: "Bands you need to see live.",
        text:
          "Last ten years saw a lot of changes in my perception of music. I've listened to a ton of records, attented too many shows to count",
        date: "07/02/2020"
      },
      {
        id: "1",
        title: "The thing about winter.",
        text:
          "Isn't it ironic that the things which make us feel uncomfortable turn out to do the best for us in a longrun? That's one of the reasons, I think, I've grown to become madly in love with winter",
        date: "07/02/2020"
      },
      {
        id: "2",
        title: "Pagan basis of Tolkien's works.",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iusto enim ab dolores blanditiis dolor officiis quibusdam quam laborum fugiat velit, dolorum, tempora laboriosam inventore nesciunt, ea aperiam nihil harum autem doloremque sequi? Porro impedit velit illum esse vitae rem dolor dolorem eveniet? Laborum facere ipsum doloremque! Sequi voluptas blanditiis, temporibus odio earum placeat enim officiis nostrum consequuntur! Quos suscipit nihil at quisquam recusandae excepturi quia nam dolore, beatae accusamus eos molestiae. Soluta sed optio minima aperiam, ad eos explicabo molestiae commodi eius, nesciunt facere doloribus quis at consequuntur dicta? Delectus obcaecati animi optio inventore aut quo ipsam tempore? Aut harum itaque repudiandae in, molestiae recusandae nulla doloremque sequi qui. Repudiandae omnis magnam ab facilis explicabo doloremque mollitia qui, alias dolore esse sunt, similique sit exercitationem veniam asperiores doloribus, eaque id enim! Error assumenda facere debitis dolore minus iure officiis consequuntur voluptates, hic qui iste, doloremque laboriosam ipsa animi itaque accusantium aut aperiam vel. Dolorum eius doloribus cumque ullam iure autem excepturi fugiat adipisci mollitia atque necessitatibus tempore voluptatem suscipit, blanditiis saepe ex nisi quas tenetur qui. Sunt facilis veritatis est perspiciatis nostrum? Magnam assumenda repellendus quas unde, porro fugiat ipsam omnis aut harum? Deleniti itaque suscipit fuga blanditiis quisquam cum sunt distinctio. Accusantium molestiae esse provident suscipit iure, veritatis odit facilis consequuntur velit. Quod earum nam eius ducimus maiores quasi! Expedita culpa deleniti dolorem illum consequuntur, eligendi corrupti? Modi ex alias illum ut. Aut ducimus officia blanditiis facere quia dolorum nobis deserunt. Eius fugit sed autem est incidunt fuga, officiis similique dolores. Autem perspiciatis iste veritatis nisi dignissimos totam, consectetur enim officia debitis ipsam blanditiis dolorem esse? Beatae voluptates fuga reprehenderit magni voluptatibus libero numquam et cum quibusdam totam laborum architecto, commodi dolores expedita debitis accusantium nulla, velit eos aspernatur fugit vitae, temporibus animi. Fuga perspiciatis velit culpa aspernatur qui repudiandae cumque deserunt ipsam! Impedit saepe dolor praesentium quod facilis sequi necessitatibus, aliquam, veniam doloribus, ratione sunt illo. Neque assumenda laboriosam amet quidem quaerat, animi velit voluptatem omnis aperiam quod reiciendis consequatur officiis corporis iusto saepe reprehenderit inventore tempora nesciunt temporibus deleniti! Natus odio saepe quisquam cumque corrupti laborum eaque quo corporis vel beatae, omnis tenetur similique sunt cupiditate officia maxime in qui, dignissimos itaque molestiae autem quos. Architecto commodi et est asperiores, neque aspernatur quibusdam repudiandae, modi ea consequuntur numquam! Provident magnam quidem consectetur eveniet aliquam laudantium exercitationem veritatis rem illum. Temporibus ea voluptatibus repellat vitae perferendis sunt molestias cumque sint, tempora ex sit placeat voluptate nulla voluptatum quas inventore iure praesentium illum numquam fugit aspernatur! Praesentium laudantium, numquam quo quam eius ducimus inventore eligendi et magnam ipsa beatae optio dicta animi doloribus labore, vero debitis unde delectus illo deleniti tenetur in cum veniam ex? Dicta, dolores reiciendis aliquam ipsa labore natus voluptatem accusamus soluta dolore aperiam incidunt officiis sequi tempore eos veniam consequatur optio possimus delectus similique atque molestias. Id delectus alias ipsa similique quod. Culpa magni iure numquam porro sit atque libero laborum earum molestias harum, accusantium vel laudantium, odio similique accusamus aperiam expedita. Itaque dolore numquam ipsam repellat tempora molestias quas excepturi iure soluta, dolorem quis ut repellendus eaque voluptatum laudantium porro quidem odit saepe in ex quam doloremque quae labore necessitatibus? Unde labore numquam, nostrum similique quasi eos provident ab, facilis et cumque officia mollitia recusandae maiores magnam sint modi possimus vero aut omnis nulla accusamus corporis hic itaque. Ab, cum facilis sunt ipsa aut ad eligendi dicta ea, provident quasi, odit doloremque iusto nisi quis ullam ipsam? Magnam quia ducimus quidem deserunt, dolor quo. Assumenda aliquid autem mollitia accusantium optio recusandae facilis aperiam molestias maiores corrupti. Quam amet, quod blanditiis magni animi consequuntur veritatis distinctio mollitia. Ducimus, dignissimos! Voluptate quisquam id, quibusdam quasi sit ad sunt, vero officiis eaque assumenda cupiditate asperiores optio ducimus! Ratione odio animi necessitatibus magni expedita consectetur quod, mollitia, dolor, totam nesciunt eos voluptatibus. Voluptatibus recusandae at, consequuntur voluptatum, saepe perspiciatis nulla accusantium animi, voluptatem unde reiciendis consequatur ducimus blanditiis? Nisi quas perferendis enim voluptatum provident omnis eum tempore animi vero quisquam quam vitae, veniam adipisci reiciendis expedita debitis. Voluptas in saepe officiis, quidem tempora dignissimos repellendus culpa fugiat voluptate dicta animi atque, fuga corrupti beatae expedita provident, dolorem doloribus eius! Possimus asperiores veritatis labore dolor voluptatem ad neque eligendi commodi cumque tempore ab excepturi, hic dolorum inventore dignissimos cum! Natus repudiandae ratione doloribus exercitationem eius, provident voluptatem aspernatur beatae pariatur, soluta voluptas, placeat nam? Rerum doloribus eaque laboriosam quia voluptatibus enim, consectetur quisquam vitae, voluptates quo eligendi dignissimos voluptas quod omnis repellat inventore id blanditiis facere laborum officiis atque deserunt magni? Voluptates fuga inventore minus. Cumque ut consequuntur ipsam obcaecati corporis alias dolorum, saepe totam consectetur magnam molestias eum, dolores, magni quaerat. Non impedit cumque blanditiis. Vel maxime nesciunt asperiores consequatur reprehenderit totam excepturi recusandae. Adipisci asperiores repellendus iusto, sequi earum officia minus cum excepturi consequuntur! Obcaecati vel in enim eveniet deserunt iusto, ipsa magnam soluta ullam sit voluptatibus quidem? Repudiandae exercitationem mollitia atque natus incidunt quibusdam, tenetur aspernatur commodi asperiores quis. Praesentium voluptatem inventore sit magni deserunt repellat officiis amet totam omnis saepe consequuntur corrupti nihil iure esse possimus quod quisquam hic tenetur doloribus repudiandae, architecto nam fuga sint asperiores? Earum magnam, labore ipsam inventore nihil incidunt porro perferendis consequatur aliquam eum saepe itaque cumque ratione deserunt voluptates quaerat accusantium dolorem nulla cupiditate. Minima repellendus aspernatur quam quaerat fugit unde ullam incidunt numquam animi odio corporis, facere distinctio ab earum cum ducimus delectus repudiandae? Nemo sunt doloribus ratione deleniti suscipit ipsum iusto error dolorem. Nobis quae nostrum eius. Molestias dolores dolore corrupti expedita consequuntur laudantium libero possimus cumque minima nesciunt aspernatur natus eligendi iure dolorem, aperiam sequi aliquam? Necessitatibus fuga unde dolore tenetur reprehenderit nam vero tempore nostrum tempora molestiae, debitis autem impedit aspernatur magnam eveniet quidem. Perferendis in recusandae id natus rerum fugiat enim ipsam sunt soluta obcaecati ratione, tempora ducimus accusantium nostrum architecto numquam. Magni nostrum, vel doloremque ipsa quibusdam harum unde, cumque necessitatibus nam sit ea incidunt in optio eius deleniti blanditiis natus modi earum eveniet consectetur! Cumque facilis sit eligendi, consectetur ipsa fugiat?",
        date: "07/02/2020"
      }
    ]
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
          <div className="blog" id="blog">
            <div className="overlay">
              <Route
                exact
                path="/"
                component={() => (
                  <BlogNewEntries articles={this.state.articles} />
                )}
              />
              <Route
                path="/blog/article/:id"
                component={params => (
                  <BlogArticle
                    article={this.state.articles[params.match.params.id]}
                  />
                )}
              />

              <Route
                path="/blog/archive"
                component={() => <BlogArchive articles={this.state.articles} />}
              />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default Blog;
