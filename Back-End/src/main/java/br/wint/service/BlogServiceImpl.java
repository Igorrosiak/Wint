package br.wint.service;

import br.wint.model.Blog;
import br.wint.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService{

    @Autowired
    BlogRepository blogRepository;

    @Override
    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    @Override
    public Blog create(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Optional<Blog> findById(Long id) {
        return blogRepository.findById(id);
    }

    @Override
    public Blog update(Long id, Blog blog){
        Optional<Blog> updateBlog = blogRepository.findById(id);
        if (!updateBlog.isEmpty()){
            updateBlog.get().setName(blog.getName());
            updateBlog.get().setDescription(blog.getDescription());
            updateBlog.get().setContent(blog.getContent());
            updateBlog.get().setData(blog.getData());
            return blogRepository.save(updateBlog.get());
        } else {
            return null;
        }
    }

    @Override
    public Blog save(Blog blog) {
        try {
            return blogRepository.save(blog);
        }
        catch (Exception e){ throw e; }
    }

    @Override
    public boolean delete(Long id) {
        try {
            blogRepository.deleteById(id);
            return blogRepository.findById(id).isEmpty();
        } catch (Exception e) {
            return false;
        }
    }
}
