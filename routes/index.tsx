import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://avatars2.githubusercontent.com/u/43266386?s=200&v=4"
        />
        <link
          rel="stylesheet"
          href="https://casjay-templates.github.io/jekyll-site/assets/css/hacker.css"
        />
        <link
          rel="stylesheet"
          href="https://casjay-templates.github.io/jekyll-site/assets/css/base.css"
        />
        <link
          rel="stylesheet"
          href="https://casjay-templates.github.io/jekyll-site/assets/css/bootstrap/darkly.css"
        />
        <link
          rel="stylesheet"
          href="https://casjay-templates.github.io/jekyll-site/assets/css/bootstrap/bootstrap-icons.css"
        />
      </Head>
      <div>
        <div
          class="container-fluid"
          style="display:flexbox;max-width: 95%;margin-left: 20px;margin-right: 20px;justify-content: center;"
        >
          <div class="container-fluid align-items-center text-center">
            <div class="row">
              <div class="col-md-2">
                <a href="/">
                  <img src="https://avatars2.githubusercontent.com/u/43266386?s=200&v=4" />
                </a>
              </div>
              <div class="col-md-8">
                <span class="">
                  <h1>.// {{}}</h1>
                  <h2>Primary theme for all sites</h2>
                  <h4>Serve it!</h4>
                </span>

                <nav>
                  <br />
                  <h4>
                    <nav class="main-nav">
                      <a
                        type="button"
                        href=""
                        class="sidebar-nav-item btn btn-outline-success disabled"
                        style="font-size: .9rem;"
                      >
                        Home
                      </a>
                    </nav>
                  </h4>
                </nav>
              </div>

              <div class="col-md-2">
                <div class="col" style="width: 100%;text-align: center;">
                </div>
              </div>
              <hr
                class="hr"
                style="width: 100%; border: none;border-top: 3px double #dfdbdb;color: #949393;overflow: hidden;height: 5px;"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
