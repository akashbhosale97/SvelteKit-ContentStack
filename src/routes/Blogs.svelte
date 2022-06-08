        <div style={{ paddingTop: "68px", minHeight: "85vh" }}>
          <div
            class="container-fluid py-5 text-white"
            style={{ height: "300px", background: "#715cdd" }}
            data-aos="fade-up"
          >
            <div class="row">
              <div class="blog_banner_title fs-2 col-lg-12 text-center">
                {blogs.blog_page_heading}
              </div>
              <div class="blog_banner_content fs-5 mt-3 col-lg-6 offset-lg-3">
                {blogs.blog_page_content}
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <div class="row">
              {blogArray.map((blog) => {
                return (
                  <div class="col-lg-4" key={blog.blog_title}>
                    <BlogCard
                      img={blog.blog_img.url}
                      blogTitle={blog.blog_title}
                      blogContent={blog.blog_content}
                      blogAuthor={blog.blog_author}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style>
          
        </style>