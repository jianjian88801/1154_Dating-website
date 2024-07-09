package com.dao;

import com.entity.XiangqinLiuyanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.XiangqinLiuyanView;

/**
 * 相亲留言 Dao 接口
 *
 * @author 
 */
public interface XiangqinLiuyanDao extends BaseMapper<XiangqinLiuyanEntity> {

   List<XiangqinLiuyanView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
